const nano = require('nano')('http://admin:password@localhost:5984'); // URL zur CouchDB mit Anmeldedaten
const dbName = 'messages'; // Name der zu verwendenden Datenbank

// Verbindung zur CouchDB-Datenbank herstellen
const db = nano.db.use(dbName);

// Prüfen, ob die Datenbank existiert, und gegebenenfalls erstellen
nano.db.get(dbName, (err) => {
  if (err) {
    nano.db.create(dbName, (errCreate) => {
      if (errCreate) {
        console.error('Error creating database:', errCreate);
      } else {
        console.log(`Database ${dbName} created!`);
      }
    });
  }
});

// Exportieren der Datenbankverbindung, damit sie in anderen Dateien verwendet werden kann
module.exports = db;
