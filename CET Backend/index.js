

// mongodb+srv://TrackLioAdmin:15DO7UR001@cluster0.dq7psmt.mongodb.net/?appName=Cluster0


const express = require("express");
const cors = require("cors");
require("dotenv").config();
// require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const { MongoClient, ServerApiVersion } = require("mongodb");

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


        const verifyFirebaseToken = async (req, res, next) => {
            try {
                const authHeader = req.headers.authorization;

                if (!authHeader || !authHeader.startsWith("Bearer ")) {
                    return res.status(401).send({ error: "Unauthorized" });
                }

                const token = authHeader.split(" ")[1];

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

    } catch (err) {
        console.error(err);
    }
}

run();

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});