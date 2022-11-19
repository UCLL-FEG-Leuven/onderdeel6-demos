import { fileURLToPath } from "url";
import { join, dirname } from "path";
import ChatMessage from "../shared/chat-message.js";
import express from "express";

// Bij gebruik van ES6 modules kan je __dirname niet meer gebruiken
// Maar je kan het nog wel zelf achterhalen door onderstaande code.
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

let messages = [
    new ChatMessage('system','Chat server is up and running since ' + new Date().toISOString())
];

app.use(express.static(join(__dirname, '..', 'client', 'public')));
app.use(express.json());

app.get('/api/chat', function (req, res) {
    res.json(messages);
});

app.post('/api/chat', function(req, res) {
    messages.push(req.body);
    res.status(204).end();
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});