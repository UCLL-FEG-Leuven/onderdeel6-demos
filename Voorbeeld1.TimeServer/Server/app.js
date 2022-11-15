const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "..", "Client", "Public")));

app.get("/time", (req, res) => {
    let toReturn = {
        time: new Date()
    };
    res.json(toReturn);
});

app.listen(process.env.PORT, () => {
    console.log("Server is listening on port " + process.env.PORT);
});