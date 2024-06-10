const messageModel = require('../models/messageModel');

// Funktion zum Speichern einer Nachricht
const saveMessage = async (message) => {
  try {
    // Speichern der Nachricht und Rückgabe der Antwort
    const response = await messageModel.saveMessage(message);
    return response;
  } catch (error) {
    console.error(error); // Fehlerbehandlung
  }
};

// Exportieren der Funktion, damit sie in anderen Dateien verwendet werden kann
module.exports = {
  saveMessage,
};
