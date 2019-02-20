const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const axios = require('axios');
const app = express();
const port = process.env.PORT || 3006;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  //send a response that includes html
  res.sendFile(path.join(__dirname, './public/index.html'));
})

// app.get('/:id/', (req, res) => {
//   console.log(req.params.id);
//   // axios.get('http://localhost:3007/id')
// })

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});