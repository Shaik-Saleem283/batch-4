const express = require('express');
const bodyParser = require('body-parser');
const userRoutes =require('./route/userRoute');
const postRoutes = require('./route/postRoute');
const app = express();
const port = 3000;
 
// Middleware to parse JSON data
app.use(bodyParser.json());

 
// In-memory user data store (Replace this with a real database in production)

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
module.exports = app;  