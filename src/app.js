const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
app.get('/api/get-next-num', (req, res) => {
   const num = req.body.num;

  /*if (!num || isNaN(num) || num == 0) {
    return res.status(400).json({
      status: 'failure',
      message: 'Invalid number. Please provide a valid number in the request body.',
    });
  } else {*/
   
    const nextNum = parseInt(num) + 1;
    res.status(200).json({
      status: 'success',
      message: nextNum,
    });
  //}
})
  

module.exports = app;
