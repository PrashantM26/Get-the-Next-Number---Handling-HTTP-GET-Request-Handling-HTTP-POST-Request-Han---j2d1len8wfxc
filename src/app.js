const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
app.get('/api/get-next-num', (req, res) => {
  const num = req.body.num;
  if(!num && isNaN(num)){
    app.status(400).json({
      status : "failure"
    })
  }
  else {
    //const nextNum = num + 1;
    num++;
    res.status(200).json({
      status: 'success',
      message: num,
    });
  }
})
  

module.exports = app;
