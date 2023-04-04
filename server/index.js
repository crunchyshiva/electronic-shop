const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const routes = require('./src/routes');
const connectDB = require('./src/dbconfig/database');
const PORT = process.env.PORT || 3001;

require('dotenv').config();

connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

require("./src/routes")(app);

app.get('/test', (req, res) => {
  res.json({message:'Hello from Server'})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});