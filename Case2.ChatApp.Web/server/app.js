import ChatMessage from "../shared/chat-message.js";
import express from "express";
const port = 3000;

const app = express();

let messages = [
    new ChatMessage('system','Chat server is up and running since ' + new Date().toISOString())
];

app.use(express.static('../client/public'));
app.use(express.json());

app.get('/api/chat', function (req, res) {
    res.json(messages);
});

app.post('/api/chat', function(req, res) {
    messages.push(req.body);
    res.status(204).end();
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});