const express = require('express');




const app = express();
app.use(express.json());
const axios = require('axios');


const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());
const apiKey = process.env.GEMINI_API_KEY;  //extracting the gemini api key over here

const PORT = process.env.PORT || 5000;


// const {myrouter} = require('./route/myrouter');  // keep the brackets as the same for the exporting and the imporing the componenet
// //over there


// app.use('/api',myrouter);

// app.get('/', (req,res)=>{

//     res.end("Hello from the  our /  or the home page");
// })

// app.get('/about', (req, res)=>
// {
//     res.end("heello from the about page :");
// })

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


