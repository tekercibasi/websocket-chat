const socketIo = require('socket.io');
const messageController = require('../controllers/messageController');

// Funktion zur Initialisierung des WebSocket-Servers
const websocketServer = (server) => {
  const io = socketIo(server); // WebSocket-Server an den HTTP-Server binden

  // Wenn sich ein Client verbindet
  io.on('connection', (socket) => {
    console.log('New client connected'); // Meldung im Server-Log

    // Wenn eine Nachricht vom Client empfangen wird
    socket.on('message', async (msg) => {
      console.log('Message received:', msg); // Empfangene Nachricht im Server-Log

      // Nachricht in der Datenbank speichern
      try {
        const savedMessage = await messageController.saveMessage({ username: msg.username, message: msg.text, timestamp: new Date() });
        console.log('Message saved:', savedMessage);
        
        // Nachricht an alle verbundenen Clients senden
        io.emit('newMessage', msg);
      } catch (error) {
        console.error('Error saving message:', error);
      }
    });

    // Wenn sich ein Client trennt
    socket.on('disconnect', () => {
      console.log('Client disconnected'); // Meldung im Server-Log
    });
  });
};

// Exportieren der Funktion, damit sie in anderen Dateien verwendet werden kann
module.exports = websocketServer;
