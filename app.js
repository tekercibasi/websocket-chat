import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { websocketServer } from './server/websocketServer.js';

// Initialisieren einer Express-Anwendung
const app = express();
const server = http.createServer(app);

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
