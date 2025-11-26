const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const {
  default: UpdateUser,
} = require("./Client SIde/simple-curd-client/src/Components/UpdateUser");

const app = express();
const port = process.env.PORT || 3000;

//middlewear
app.use(cors());
app.use(express.json());

//g7kaCkbOHSbXUdE3

const uri =  "mongodb+srv://newDB:BONDsms009@cluster0.blss57h.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Simple CURD server is running");
});

async function run() {
  try {
    await client.connect();
    console.log("Connected!");

    const usersDB = client.db("usersDB"); 
    const usersCollection = usersDB.collection("users");

    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find().sort({price_min: 1});
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.findOne(query);
      console.log("called");
      res.send(result);
    });

    //add database related APIs here
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      console.log("hitting the users post api", newUser);
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });

   

    app.delete(`/users/:id`, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log("Simple CURD server is running on port:", port);
});
