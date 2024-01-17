const express = require('express');
const app = express();
let {MongoClient,ObjectId} = require('mongodb');
let dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db ('ums12');
const collection = db.collection("users");

console.log("__dirname :", __dirname);
app.use('/',express.static(__dirname + '/client'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/test',(req,res)=>{
    res.status(200).send("Success");
});

app.post('/submit',async (req,res)=>{
    console.log("reached here");
    console.log("req body :", req.body);

    await collection.insertOne(req,body)
    .then((message)=> {
        console.log("Document inserted successfully :",message);
        res.status(201).send("Success");
    })
    .catch((errors)=>{
        console.log("Document insert failed :", errors);
        res.status(400).send("Failed");
    });
});

app.get('/getData', async (req,res)=>{
    const formData = collection.find
})


async function connect(){
    await client.connect()
    .then((messge)=>{
      console.log("Database connection established");
  
    })
    .catch((error)=>{
      console.log("Data")
      console.log("Database error :",error.message?error.message:error);
    })
    .finally(()=>{
      app.listen(port,()=>{
        console.log(`server running at http://localhost:${port}`)
      })
    });
  }
  
  connect(); 