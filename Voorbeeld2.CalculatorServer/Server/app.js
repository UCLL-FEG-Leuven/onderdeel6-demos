const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "..", "Client", "Public")));
app.use(express.json());

app.post("/add", (req, res) => {
    let result = {
        sum: req.body.getal1 + req.body.getal2
    };
    res.json(result);
});

app.listen(process.env.PORT, () => {
    console.log("Server is listening on port " + process.env.PORT);
});