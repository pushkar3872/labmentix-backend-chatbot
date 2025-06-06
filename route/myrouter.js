
const express = require('express');
const myrouter = express.Router();



//frot the one route to the many paths defining here
//if we use the myrouter it can route the componenets froom the same/constnt path only
//It is the wrong following
// myrouter.route('/')
// .get((req, res)=>
// {
//     res.end(" homepage / from the router componenet ");
// })
// .get('/pre',(req,res)=>
// {
//     res.end("Hello from the route from the same path");
// })
// .post((req,res)=>
// {
//     res.end("From the the postroute from the router component");
// })



myrouter.route('/')
  .get((req, res) => {
    res.end("homepage / from the router component");
  })
  .post((req, res) => {
    res.end("POST / from the router component");
  });

myrouter.get('/pre', (req, res) => {
  res.end("Hello from /pre route");
});

// // 🔽 Global fallback route handler (MUST be at the end)
// myrouter.all('*', (req, res) => {
//   res.status(404).send("🚫 Route not found in router.");
// });




module.exports = {myrouter};