require('dotenv').config();
const express = require('express')
const app = express();


// home route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to IMDB" });

});

// set port, listen for requests
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(`Couldn't start the server. Error: ${err}`)
    }
    console.log(`Server is running on port ${process.env.PORT}.`);
});