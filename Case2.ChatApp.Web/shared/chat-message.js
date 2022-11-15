export default class ChatMessage {
    constructor(nickname, message) {
        this._nickname = nickname;
        this._message = message;
    }

    get nickname() {
        return this._nickname; 
    }

    get message() {
        return this._message;
    }
}

// module.exports = ChatMessage;