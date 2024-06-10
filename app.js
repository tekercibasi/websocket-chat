const express = require('express');  // Web-Framework für Node.js
const http = require('http');        // Modul zum Erstellen eines HTTP-Servers
const socketIo = require('socket.io'); // Modul für WebSocket-Kommunikation
const websocketServer = require('./server/websocketServer'); // Eigene Datei für WebSocket-Logik

// Initialisieren einer Express-Anwendung
const app = express();
const server = http.createServer(app); // Erstellen eines HTTP-Servers mit der Express-App

// Initialisieren des WebSocket-Servers und Binden an den HTTP-Server
websocketServer(server);

// Bereitstellen von statischen Dateien (wie HTML, CSS, JS) aus dem "public" Verzeichnis
app.use(express.static('public'));

// Festlegen des Ports, auf dem der Server laufen soll (Standard: 3000)
const PORT = process.env.PORT || 3000;

// Starten des Servers
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
