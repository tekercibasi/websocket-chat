import db from '../config/db.js';

// Funktion zum Speichern einer Nachricht in der Datenbank
export const saveMessage = async (message) => {
  try {
    // Einfügen der Nachricht in die Datenbank
    const response = await db.insert(message);
    return response; // Rückgabe der Antwort von der Datenbank
  } catch (error) {
    throw new Error('Error saving message:', error); // Fehlerbehandlung
  }
};
