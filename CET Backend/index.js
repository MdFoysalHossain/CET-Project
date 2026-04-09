

// mongodb+srv://TrackLioAdmin:15DO7UR001@cluster0.dq7psmt.mongodb.net/?appName=Cluster0


const express = require("express");
const cors = require("cors");
require("dotenv").config();
// require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = process.env.MONGODB_URI;

// CORS setup
app.use(cors({
    origin: ["http://localhost:5173"],
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

        const projects = client.db("projects");
        const allProjects = projects.collection("allProjects");

        const tasksDb = client.db("Task");
        const allTasks = tasksDb.collection("AllTask");
        const subTasks = tasksDb.collection("SubTask");


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

        app.post("/createTask", verifyFirebaseToken, verifyEmailMatch, async (req, res) => {
            const email = { email: req.user.email };
            // const projectId = req.user.projectId ;
            const taskDetails = {
                ...req.body
            };

            const createTask = await allTasks.insertOne(taskDetails)
            console.log(createTask)
            res.send(createTask)
        })

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
        })

    } catch (err) {
        console.error(err);
    }
}

run();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});