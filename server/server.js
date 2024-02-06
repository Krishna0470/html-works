const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connect = require('./db/config');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');


app.use(express.static(__dirname + '/../client'));

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(authRoutes);
app.use(userRoutes);
//Database connection
connect();
app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
});


//1.pass token in request header
//2.create a fime checkLogin.js in utils
//3.creat a middleware function and export it in checkLogin
//4.Inport or require this function in controller file        router get ('/user',CheckLogin , userController.getData);


                       //CheckLogin function(req,res,next)
                       //______________________________


//1.Get JWT token form req headers
//2.Validate the token (!token,undefined,null)
//3.Decode the JWT token using private key
//4.Take user_id from decoded token
//5.Find user with user_id
//6.If user found , write user_id to req then call next() 
       //else if user not found, error response