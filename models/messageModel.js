const db = require('../config/db');

// Funktion zum Speichern einer Nachricht in der Datenbank
const saveMessage = async (message) => {
  try {
    // Einfügen der Nachricht in die Datenbank
    const response = await db.insert(message);
    return response; // Rückgabe der Antwort von der Datenbank
  } catch (error) {
    throw new Error('Error saving message:', error); // Fehlerbehandlung
  }
};

// Exportieren der Funktion, damit sie in anderen Dateien verwendet werden kann
module.exports = {
  saveMessage,
};
