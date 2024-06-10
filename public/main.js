// Verbindung zum WebSocket-Server herstellen
const socket = io();

// Chatbereich
const chat = document.getElementById('chat');
let username = '';

socket.on('connect', () => {
  console.log('Connected to WebSocket server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket server');
});

socket.on('newMessage', (msg) => {
  console.log('New message received:', msg);
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', msg.username === username ? 'sent' : 'received');
  messageElement.textContent = `${msg.username}: ${msg.text}`;
  chat.appendChild(messageElement);
  chat.scrollTop = chat.scrollHeight;
});

function setUsername() {
  username = document.getElementById('usernameInput').value;
  console.log('Username set to:', username);
}

function sendMessage() {
  if (username === '') {
    alert('Please set your name first.');
    return;
  }
  const message = document.getElementById('messageInput').value;
  console.log('Sending message:', message);
  socket.emit('message', { username: username, text: message });
  document.getElementById('messageInput').value = '';
}

document.getElementById('usernameInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    setUsername();
  }
});

document.getElementById('messageInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
