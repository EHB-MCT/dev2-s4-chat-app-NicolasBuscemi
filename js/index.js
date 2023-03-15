"use strict";

const chat = {
    author: "yourName",
    init() {
    },
    sendMessage() {
    },
    fetchMessages() {
        fetch('https://dev2chat.onrender.com/messages')
        .then(response => response.json())
        .then(data => console.log(data));
        
    },
    renderMessage(message) {
    }

}

chat.init();