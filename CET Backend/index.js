const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;


const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = process.env.MONGODB_URI;

// CORS setup
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

const admin = require("firebase-admin");


admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.FB_ADMIN_project_id,
        clientEmail: process.env.FB_ADMIN_client_email,
        privateKey: process.env.FB_ADMIN_private_key?.replace(/\\n/g, '\n'),
    }),
});

// Mongo client
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");
        const usersDb = client.db("UsersDb");
        const usersCollection = usersDb.collection("UsersCollection");
        const subUsers = usersDb.collection("subUsers");

        const projects = client.db("projects");
        const allProjects = projects.collection("allProjects");

        const tasksDb = client.db("Task");
        const allTasks = tasksDb.collection("AllTask");
        const subTasks = tasksDb.collection("SubTask");

        const { ObjectId } = require("mongodb");


        const verifyFirebaseToken = async (req, res, next) => {
            try {
                const authHeader = req.headers.authorization;

                if (!authHeader || !authHeader.startsWith("Bearer ")) {
                    return res.status(401).send({ error: "Unauthorized" });
                }

                const token = authHeader.split(" ")[1];
                // console.log(token)

                const decoded = await admin.auth().verifyIdToken(token);

                req.user = decoded; // 🔥 contains uid, email, etc.


                console.log("Firebase Verified")

                next();
            } catch (error) {
                console.log("Invalid Token")
                res.status(401).send({ error: "Invalid token" });
            }
        };

        const verifyEmailMatch = (req, res, next) => {
            const requestEmail = req.query.email; // or req.body.email
            const tokenEmail = req.user.email;

            console.log("Requested Email:", requestEmail)
            console.log("Token Email:", tokenEmail)

            if (!requestEmail) {
                console.log("Email Not Found")
                return res.status(400).send({ error: "Email required" });
            }

            if (requestEmail !== tokenEmail) {

                console.log("Email Mismatched")
                return res.status(403).send({ error: "Email mismatch" });
            }

            console.log("Email Matched")

            next(); // ✅ email matches → continue
        };




        // Example route
        app.get("/", (req, res) => {
            res.send("Server running 🚀");
        });

        app.get("/checkUser", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            const email = { email: req.user.email };
            const findResult = await usersCollection.findOne(email);
            const nowUTC = new Date().toISOString();

            const userDetails = {
                email: req.user.email,
                name: req.user.name,
                picture: req.user.picture,
                accountType: "Free",
                createdAt: nowUTC
            }


            if (findResult === null) {
                const createAccount = await usersCollection.insertOne(userDetails)
                res.send(createAccount)
            } else {
                console.log("Alreadu Has A Account")
            }

        });


        // Gets the real user details from the database
        app.get("/getRealUser", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            const email = { email: req.user.email };
            const findResult = await usersCollection.findOne(email);
            res.send(findResult)
        });


        app.post("/createProject", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            const email = { email: req.user.email };
            const postDetails = {
                ...req.body
            };
            const createProject = await allProjects.insertOne(postDetails)
            console.log(createProject)
            res.send(createProject)

        })

        app.get("/getProjects", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            try {
                const email = req.user.email;

                const getData = await allProjects.find({
                    assignees: email   // 🔥 this matches array values directly
                }).toArray();


                console.log(getData)

                res.send(getData);
            } catch (error) {
                res.status(500).send({ error: "Failed to fetch projects" });
            }
        });

        // app.delete("/deleteProject", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
        //     console.log("Project Delete Hit");

        //     try {
        //         const email = req.user.email;
        //         const projectId = req.query.projectId;

        //         if (!projectId) {
        //             return res.status(400).send({ error: "Project ID is required" });
        //         }

        //         const result = await allProjects.deleteOne({
        //             _id: new ObjectId(projectId),
        //             createdBy: email
        //         });

        //         console.log("Delete Result:", result);

        //         if (result.deletedCount === 0) {
        //             return res.status(404).send({ error: "Project not found or unauthorized" });
        //         }

        //         res.send({
        //             success: true,
        //             deletedCount: result.deletedCount
        //         });

        //     } catch (error) {
        //         console.error(error);
        //         res.status(500).send({ error: "Failed to delete project" });
        //     }
        // });



        app.delete("/deleteProject", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            console.log("Project Soft Delete Hit");

            try {
                const email = req.user.email;
                const projectId = req.query.projectId;

                if (!projectId) {
                    return res.status(400).send({ error: "Project ID is required" });
                }

                const result = await allProjects.updateOne(
                    {
                        _id: new ObjectId(projectId),
                        createdBy: email
                    },
                    {
                        $set: {
                            state: "deleted",
                            deletedAt: new Date().toISOString() // optional but 🔥 useful
                        }
                    }
                );

                console.log("Update Result:", result);

                if (result.matchedCount === 0) {
                    return res.status(404).send({ error: "Project not found or unauthorized" });
                }

                res.send({
                    success: true,
                    modifiedCount: result.modifiedCount
                });

            } catch (error) {
                console.error(error);
                res.status(500).send({ error: "Failed to delete project" });
            }
        });


        app.get("/getTasks", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            try {
                const email = req.user.email;            // from token
                const projectId = req.query.projectId;   // from query
                const status = req.query.status;         // from query


                console.log(email, status, projectId);
                if (status === "todo") {
                    const getData = await allTasks.find({
                        // assignees: email,
                        projectId: projectId,
                        status: "To Do"
                    }).toArray();
                    res.send(getData);
                } else if (status === "inprogress") {
                    const getData = await allTasks.find({
                        // assignees: email,
                        projectId: projectId,
                        status: "In Progress"
                    }).toArray();
                    res.send(getData);
                } else if (status === "QA") {
                    const getData = await allTasks.find({
                        // assignees: email,
                        projectId: projectId,
                        status: "Q&A"
                    }).toArray();
                    res.send(getData);
                } else if (status === "Finished") {
                    const getData = await allTasks.find({
                        // assignees: email,
                        projectId: projectId,
                        status: "Finished"
                    }).toArray();
                    res.send(getData);
                }


            } catch (error) {
                res.status(500).send({ error: "Failed to fetch projects" });
            }
        });

        app.get("/getSubTasks", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            try {
                const email = req.user.email;            // from token
                const taskId = req.query.taskId;   // from query

                const getData = await subTasks.find({
                    // assignees: email,
                    taskId: taskId,
                }).toArray();
                console.log(getData)
                res.send(getData);

            } catch (error) {
                res.status(500).send({ error: "Failed to fetch projects" });
            }
        });

        // app.post("/createTask", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
        //     const email = { email: req.user.email };
        //     // const projectId = req.user.projectId ;
        //     const taskDetails = {
        //         ...req.body
        //     };

        //     console.log("Creating Task:", taskDetails)

        //     const createTask = await allTasks.insertOne(taskDetails)
        //     console.log(createTask)
        //     res.send(createTask)
        // })





        app.post("/createTask", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            try {
                const taskDetails = { ...req.body };

                // console.log("Creating Task:", taskDetails);

                // 👉 Insert task first
                const createTask = await allTasks.insertOne(taskDetails);

                // 👉 Extract usernames from assignees
                const usernames = (taskDetails.assignees || []).map(u => u.username);

                // 👉 Update project
                if (taskDetails.projectId && usernames.length > 0) {
                    await allProjects.updateOne(
                        { _id: new ObjectId(taskDetails.projectId) },
                        {
                            $addToSet: {
                                assignees: { $each: usernames }
                            }
                        }
                    );
                }
                res.send(createTask);

            } catch (error) {
                console.error("Create Task Error:", error);
                res.status(500).send({ error: "Failed to create task" });
            }
        });




        app.put("/tasks/:taskId/attachments", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            try {
                const email = req.user.email;
                const { taskId } = req.params;
                const attachment = req.body;

                console.log("BODY:", attachment);

                if (!attachment || !taskId) {
                    return res.status(400).send({ error: "Missing data" });
                }

                const result = await allTasks.updateOne(
                    {
                        _id: new ObjectId(taskId)
                    },
                    {
                        $push: {
                            attachments: {
                                $each: [
                                    {
                                        ...attachment,
                                    }
                                ]
                            }
                        }
                    }
                );

                if (result.modifiedCount === 0) {
                    return res.status(404).send({ error: "Task not found or unauthorized" });
                }

                res.send({
                    success: true,
                    message: "Attachment added",
                    result
                });

            } catch (err) {
                console.error(err);
                res.status(500).send({ error: "Server error" });
            }
        });

        app.post("/createSubTask", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            const email = { email: req.user.email };
            const taskDetails = {
                ...req.body
            };

            const createSubTask = await subTasks.insertOne(taskDetails)
            console.log(createSubTask)
            res.send(createSubTask)
        });

        app.post("/createUser", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            try {
                const userDetails = { ...req.body };

                // 🔍 Check if username already exists
                const existingUser = await subUsers.findOne({
                    username: userDetails.username
                });

                if (existingUser) {
                    return res.status(400).send({
                        message: "Username already exists"
                    });
                }

                const createUser = await subUsers.insertOne(userDetails);
                res.send(createUser);

            } catch (error) {
                console.error(error);
                res.status(500).send({ message: "Server error" });
            }
        });

        app.put("/updateUser", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            try {
                const userDetails = { ...req.body };

                const result = await subUsers.updateOne(
                    { username: userDetails.username }, // filter
                    { $set: userDetails },              // update fields
                    { upsert: false }                  // don't create new if not found
                );

                if (result.matchedCount === 0) {
                    return res.status(404).send({
                        message: "User not found"
                    });
                }

                res.send({
                    message: "User updated successfully",
                    result
                });

            } catch (error) {
                console.error(error);
                res.status(500).send({ message: "Server error" });
            }
        });

        // app.post("/Login", async (req, res) => {
        //     console.log("Login Attempt Hit");
        //     const { loginType, username, password } = req.body;

        //     if (loginType === "username") {
        //         try {
        //             console.log("Login Attempt:", { loginType, username, password });
        //             const existingUser = await subUsers.findOne({
        //                 username: username
        //             });

        //             // console.log("Found User:", existingUser);

        //             if (!existingUser || existingUser.password !== password) {
        //                 return res.status(400).send({
        //                     message: "Invalid username or password"
        //                 });
        //             } else if (existingUser.password === password && existingUser.username === username) {
        //                 return res.send({
        //                     message: "Login successful",
        //                     user: existingUser
        //                 });
        //             }

        //         } catch (error) {
        //             console.error(error);
        //             res.status(500).send({ message: "Server error" });
        //         }

        //     }


        // })



        // app.post("/Login", async (req, res) => {
        //     const { loginType, username, password } = req.body;

        //     if (loginType !== "username") return;

        //     try {
        //         const user = await subUsers.findOne({ username });

        //         // ❌ User not found
        //         if (!user) {
        //             return res.status(400).send({
        //                 message: "invalid username",
        //             });
        //         }

        //         // 🚫 Check if disabled
        //         if (user.status === "disabled") {
        //             return res.status(403).send({
        //                 message: "Account disabled. Contact admin.",
        //             });
        //         }

        //         // ❌ Wrong password
        //         if (user.password !== password) {
        //             const attempts = (user.failedAttempts || 0) + 1;

        //             // 🔒 Disable after 5 attempts
        //             if (attempts >= 5) {
        //                 await subUsers.updateOne(
        //                     { _id: user._id },
        //                     {
        //                         $set: { status: "disabled" },
        //                         $unset: { failedAttempts: "" },
        //                     }
        //                 );

        //                 return res.status(403).send({
        //                     message: "Account disabled after too many failed attempts.",
        //                 });
        //             }

        //             await subUsers.updateOne(
        //                 { _id: user._id },
        //                 { $set: { failedAttempts: attempts } }
        //             );

        //             return res.status(400).send({
        //                 message: "invalid password",
        //             });
        //         }

        //         // ✅ Correct password
        //         await subUsers.updateOne(
        //             { _id: user._id },
        //             { $set: { failedAttempts: 0 } }
        //         );

        //         return res.send({
        //             message: "Login successful",
        //             user,
        //         });

        //     } catch (error) {
        //         console.error(error);
        //         res.status(500).send({ message: "Server error" });
        //     }
        // });








        app.post("/Login", async (req, res) => {
            const { loginType, username, password } = req.body;

            if (loginType !== "username") return;

            try {
                const user = await subUsers.findOne({ username });

                // ❌ User not found
                if (!user) {
                    return res.status(400).send({
                        message: "invalid username",
                    });
                }

                // 🚫 Check if disabled
                if (user.status === "disabled") {
                    return res.status(403).send({
                        message: "Account disabled. Contact admin.",
                    });
                }

                // ❌ Wrong password
                if (user.password !== password) {
                    const attempts = (user.failedAttempts || 0) + 1;

                    if (attempts >= 5) {
                        await subUsers.updateOne(
                            { _id: user._id },
                            {
                                $set: { status: "disabled" },
                                $unset: { failedAttempts: "" },
                            }
                        );

                        return res.status(403).send({
                            message: "Account disabled after too many failed attempts.",
                        });
                    }

                    await subUsers.updateOne(
                        { _id: user._id },
                        { $set: { failedAttempts: attempts } }
                    );

                    return res.status(400).send({
                        message: "invalid password",
                    });
                }

                // ✅ Reset failed attempts
                await subUsers.updateOne(
                    { _id: user._id },
                    { $set: { failedAttempts: 0 } }
                );

                // ⭐ CREATE JWT TOKEN (NEW)
                const token = jwt.sign(
                    { uid: user._id },
                    process.env.JWT_SECRET,
                    { expiresIn: "7d" }
                );

                // ⭐ SET HTTP-ONLY COOKIE (NEW)
                res.cookie("token", token, {
                    httpOnly: true,
                    secure: false,   // true in production (HTTPS)
                    sameSite: "lax",
                    maxAge: 7 * 24 * 60 * 60 * 1000
                });

                // ❗ Remove password before sending user
                const { password: _, ...safeUser } = user._doc || user;

                return res.send({
                    message: "Login successful",
                    user: safeUser,
                });

            } catch (error) {
                console.error(error);
                res.status(500).send({ message: "Server error" });
            }
        });

        app.post("/Logout", (req, res) => {
            res.cookie("token", "", {
                httpOnly: true,
                secure: false,   // true in production (HTTPS)
                sameSite: "lax",
                expires: new Date(0) // 🔥 immediately expires cookie
            });

            res.json({ message: "Logged out successfully" });
        });



        app.get("/me", async (req, res) => {
            try {
                const token = req.cookies?.token;

                if (!token) {
                    return res.status(401).json({ user: null });
                }

                const decoded = jwt.verify(token, process.env.JWT_SECRET);

                const user = await subUsers.findOne({
                    _id: new ObjectId(decoded.uid)
                });

                if (!user) {
                    return res.status(404).json({ user: null });
                }

                const { password, ...safeUser } = user;

                console.log("Authenticated User:", safeUser);

                res.json({ user: safeUser });

            } catch (err) {
                res.status(401).json({ user: null });
            }
        });


        app.get("/getUsers", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            try {
                const email = req.user.email;

                const users = await subUsers
                    .find({ createdBy: email })
                    .toArray();

                res.send(users);

            } catch (error) {
                console.error(error);
                res.status(500).send({ message: "Server error" });
            }
        });



    } catch (err) {
        console.error(err);
    }
}

run();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});