const express = require('express')
const app = express();

const PORT = process.env.PORT || 3000;


// home route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to IMDB" });

});

// set port, listen for requests
app.listen(PORT, (err) => {
    if(err){
        console.log(`Couldn't start the server. Error: ${err}`)
    }
    console.log(`Server is running on port ${PORT}.`);
});