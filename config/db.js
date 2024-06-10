import nano from 'nano';

const couchdbUrl = 'http://admin:password@localhost:5984';
const dbName = 'messages';

const nanoInstance = nano(couchdbUrl);

// Verbindung zur CouchDB-Datenbank herstellen
const db = nanoInstance.db.use(dbName);

// Prüfen, ob die Datenbank existiert, und gegebenenfalls erstellen
nanoInstance.db.get(dbName, (err) => {
  if (err) {
    nanoInstance.db.create(dbName, (errCreate) => {
      if (errCreate) {
        console.error('Error creating database:', errCreate);
      } else {
        console.log(`Database ${dbName} created!`);
      }
    });
  }
});

export default db;
