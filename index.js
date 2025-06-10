

//username: dadasahebtakale085
//password: LnQuMidNT4b05hWm

//connection string: mongodb+srv://dadasahebtakale085:<db_password>@labmentix.ytotcn2.mongodb.net/?retryWrites=true&w=majority&appName=labmentix

const express = require('express');

const app = express();
app.use(express.json());
const axios = require('axios');


const dotenv = require('dotenv');
dotenv.config();

// Example for Express.js backend
//keep in the mind that one you have to check cores is going to be blocked or not
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));



const apiKey = process.env.GEMINI_API_KEY;  //extracting the gemini api key over here

const PORT = process.env.PORT || 5003;




const mongoose = require('mongoose');
const bcrypt  = require('bcryptjs');
const jwt = require('jsonwebtoken');

const cookieParser= require('cookie-parser');

const jwt_secrete_key = "mypassword";


app.use(cookieParser());


const MONGO_URI = process.env.MONGO_URI;

const connectDB = () => {
  mongoose.connect(MONGO_URI)
    .then(() => {
      console.log("mongodb connected successfully ");
    })
    .catch((error) => {
      console.log("Getting the error while connecting the mongodb over here", error);
    });
};

connectDB();

// const connectDB =()=>
// {
//     // connecting to the mongodb
//     mongoose.connect(MONGO_URI, { 
//         useNewUrlParser : true,
//         useUnifiedTopology:true
//     })
//     .then(()=>{

//         console.log("mongodb connected successfully ");
//     })
//     .catch((error)=>{

//         console.log("Getting the error while connecting the mongodb over here");
//     })
// }

// connectDB();

const UserSchema = new mongoose.Schema({

    name:{

        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps: true})


//assigning the perticular collection for the perticular model(right)
const User = mongoose.model("User",UserSchema,"labcoll");  // this is the collection name


//now store the data on the perticular api call

const MessageSchema = new mongoose.Schema({
  type: String,
  content: String,
  files: Array,
  timestamp: Date,
});


const Message = mongoose.model("Message",MessageSchema,"msgcoll");



app.get('/getchathistory', async (req, res) => {
    try {
        // Fetch all messages from the "msgcoll" collection, sorted by timestamp ascending
        const messages = await Message.find({}).sort({ timestamp: 1 });
        return res.status(200).json(messages);
    } catch (error) {
        console.error("Error fetching chat history:", error);
        return res.status(500).json({ msg: "Server error while fetching chat history." });
    }
});

app.post('/savemessage', async (req, res) => {
    try {
        const { type, content, files, timestamp } = req.body;

        // Basic validation
        if (!type || !content || !timestamp) {
            return res.status(400).json({ success: false, msg: "type, content, and timestamp are required." });
        }

        // Create and save the message
        const newMessage = new Message({
            type,
            content,
            files: files || [],
            timestamp: new Date(timestamp)
        });

        await newMessage.save();

        return res.status(201).json({ success: true, msg: "Message saved successfully." });

    } catch (error) {
        console.error("Error saving message:", error);
        return res.status(500).json({ success: false, msg: "Server error while saving message." });
    }
});



console.log("just starting with the / route");

app.get('/', (req,res)=>
{
    res.end("hello from the pushkar");
})

console.log("just starting witht the call home route");

app.get('/callhome', (req,res )=>
{   
    res.end('hello from the labmentix dashboard');
})




app.post('/callsignin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      console.log("All the fields are required");
      return res.status(400).json({ msg: "All the fields are required" });
    }

    const tempuser = await User.findOne({ email });

    if (!tempuser) {
      console.log("User has not registered");
      return res.status(404).json({ msg: "The user has not registered before" });
    }

    const ismatch = await bcrypt.compare(password, tempuser.password);

    if (!ismatch) {
      console.log("The user credential is wrong");
      return res.status(401).json({ msg: "The user credential is wrong" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: tempuser._id }, jwt_secrete_key, { expiresIn: "1h", algorithm: 'HS256' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // set true in production with HTTPS
      sameSite: 'strict',
      maxAge: 3600000, // 1 hour
    });

    return res.status(200).json({
      msg: "The token has been generated successfully and user has logged in successfully",
      token,
      created_user: {
        username: tempuser.name,
        email: tempuser.email
        // Do NOT return password!
      }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error in the login route" });
  }
});


app.post('/callsignup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      console.log("All fields are required");
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("The user is already present");
      return res.status(409).json({ msg: "This user is already present" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    console.log("User has saved successfully");

    return res.status(201).json({ msg: "User registered successfully" });

  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ msg: "Server error in the signup route" });
  }
});




app.post('/callsignout', async (req, res) => {

    try {
        console.log("Into the call signout");

        res.clearCookie('token', {

            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            path: '/', // Add this if unsure  // add the path of the cookie oer there

        });

        console.log("we have cleared the cookies successfully");

       return res.status(200).json({ msg: "Logout successful" });

    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ msg: "Logout failed due to server error" });
    }

});




app.post('/callapi', async (req, res) => {

    const {mymsg} = req.body;
    //keep the type of the mymsg as the string

    if (!mymsg) {

        return res.status(400).json({ msg: "Valid 'mymsg' is required." });
    }
    else
    {
        console.log("The valide messgae is recieved");
    }

    console.log("✅ Received message:", mymsg);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const requestBody = {
        contents: [
            {
                parts: [
                    { text: mymsg }
                ]
            }
        ]
    };

    try {

        console.log("enter to axios call to the gemini api");

        const response = await axios.post(url, requestBody, {
            headers: {

                "Content-Type": "application/json"
            }

        });

        console.log("✅ Gemini API call successful.");

        const geminiReply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";

        console.log("we stored the gemini response here also");

        return res.json({
            success: true,
            reply: geminiReply
        });

    } catch (error) {

        console.error("❌ Error calling Gemini API:", error.response?.data || error.message);
        return res.status(500).json({
            success: false,
            msg: "Something went wrong calling Gemini API.",
            error: error.response?.data || error.message
        });
    }
});


app.listen(PORT, (req,res)=>{

    console.log("heello from the homepage:");
})


