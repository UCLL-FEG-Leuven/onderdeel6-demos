import ChatMessage  from "../../shared/chat-message";

const formElement = document.querySelector("form");
const nicknameInputElement = document.getElementById("nickname");
const messageInputElement = document.getElementById("message");

formElement.addEventListener("submit", async function (e) {
    e.preventDefault();
    try {
        let response = await fetch("/api/chat",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                new ChatMessage(
                    nicknameInputElement.value,
                    messageInputElement.value
                )
            )
        });
        messageInputElement.value = "";
    } catch (error) {
        console.error(error);
    }
});

// Berichten (om de seconde) ophalen
async function getMessages() {
    let response = await fetch("/api/chat");
    let chatMessages = await response.json();
    let chatHistory = "";
    for (let i = 0; i < chatMessages.length; i++) {
        let chatMessage = new ChatMessage(chatMessages[i]._nickname, chatMessages[i]._message);
        chatHistory += `${chatMessage.nickname}: ${chatMessage.message}\n`; // \n = new line
    }
    document.querySelector("textarea").value = chatHistory;

    // Binnen 1 seconde zichzelf weer aanroepen. Alternatief: setInterval().
    setTimeout(getMessages, 1000);
}

// Een eerste maal de messages ophalen.
getMessages();