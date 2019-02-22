const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3006;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})


app.listen(port, () => {
  // console.log(`server running at: http://ec2-18-219-151-193.us-east-2.compute.amazonaws.com:${port}`);
  console.log(`server running at: http://localhost:${port}`);
});