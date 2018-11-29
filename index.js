const socket = new WebSocket('ws://127.0.0.1:5500/');
const messageContainer= document.getElementById('messageContainer');
const messageText = document.getElementById('messageText');
const button = document.getElementById('sendButton');

socket.addEventListener('message', e => {
    addMessage(e.data);
});

socket.addEventListener('error', () => {
    alert('Connection lost');
});

function addMessage(message) {
    const messageItem = document.createElement('li');
    messageItem.textContent = message;
    messageContainer.appendChild(messageItem);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function sendMessage() {
    socket.send(messageText.value);
    messageText.value = '';
}

button.addEventListener('click', sendMessage);
messageText.addEventListener('change', sendMessage);
