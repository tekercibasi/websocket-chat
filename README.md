# WebSocket Chat Application

## Übersicht

Diese Anwendung ist ein Echtzeit-Chat, der WebSockets und CouchDB verwendet. Die Benutzeroberfläche ist inspiriert von WhatsApp und bietet eine ansprechende und intuitive Chat-Erfahrung.

## Technischer Aufbau

### 1. Server-Seite

#### 1.1 Node.js Server (app.js)
- **Zweck**: Initialisiert den HTTP-Server und WebSocket-Server, stellt statische Dateien bereit und startet den Server.
- **Wichtigste Module**:
  - `express`: Web-Framework für Node.js.
  - `http`: Zum Erstellen eines HTTP-Servers.
  - `socket.io`: Für die WebSocket-Kommunikation.

#### 1.2 WebSocket-Server (server/websocketServer.js)
- **Zweck**: Verwaltet WebSocket-Verbindungen, empfängt und sendet Nachrichten an Clients, speichert Nachrichten in der Datenbank.
- **Funktionen**:
  - **Verbindungshandling**: Überwacht neue Verbindungen und Trennungen von Clients.
  - **Nachrichtenempfang**: Empfängt Nachrichten von Clients, speichert sie in der CouchDB und sendet sie an alle verbundenen Clients.
  - **Nachrichtenweiterleitung**: Leitet empfangene Nachrichten an alle verbundenen Clients weiter, um einen Echtzeit-Chat zu ermöglichen.

#### 1.3 CouchDB-Konfiguration (config/db.js)
- **Zweck**: Stellt die Verbindung zu CouchDB her und überprüft/verbindet/erstellt die benötigte Datenbank.
- **Wichtigste Module**:
  - `nano`: Node.js Client für CouchDB.

#### 1.4 Datenmodell (models/messageModel.js)
- **Zweck**: Definiert die Logik zum Speichern von Nachrichten in der CouchDB.
- **Funktion**: Funktion `saveMessage`, die eine Nachricht in der Datenbank speichert.

#### 1.5 Controller (controllers/messageController.js)
- **Zweck**: Verarbeitet eingehende Nachrichten und verwendet das Datenmodell zum Speichern.
- **Funktion**: Funktion `saveMessage`, die das Datenmodell verwendet, um Nachrichten zu speichern.

### 2. Client-Seite

#### 2.1 HTML-Datei (public/index.html)
- **Zweck**: Stellt die Benutzeroberfläche für den Chat bereit.
- **Struktur**:
  - **Chat-Container**: Bereich, in dem der Chatverlauf angezeigt wird.
  - **Eingabefelder**: Felder für Benutzernamen und Nachrichten.
  - **Buttons**: Buttons zum Senden von Nachrichten und Setzen des Benutzernamens.
- **Einbindung von Bootstrap**: Für eine ansprechende und responsive Gestaltung.
- **Einbindung von `socket.io-client`**: Um die WebSocket-Verbindung zum Server herzustellen.

#### 2.2 CSS (public/styles.css)
- **Zweck**: Stellt das Layout und die Stile für den Chat bereit, um eine WhatsApp-ähnliche Oberfläche zu erstellen.
- **Stile**:
  - **Chat-Container**: Definiert das Layout des Chatbereichs.
  - **Nachrichten**: Unterscheidung von gesendeten und empfangenen Nachrichten durch unterschiedliche Farben und Ausrichtungen.

#### 2.3 JavaScript (public/main.js)
- **Zweck**: Stellt die Logik für die WebSocket-Kommunikation und die Benutzerinteraktionen bereit.
- **Funktionen**:
  - **WebSocket-Verbindung**: Initialisiert die Verbindung zum WebSocket-Server.
  - **Event-Listener**: Empfängt und zeigt neue Nachrichten im Chatbereich an.
  - **Nachrichtensenden**: Sendet Nachrichten an den Server und aktualisiert das Chat-UI.
  - **Benutzernamen setzen**: Setzt den Benutzernamen für den aktuellen Chat-Client.

### 3. Kommunikationsfluss

1. **Verbindung herstellen**:
   - Der Client verbindet sich mit dem WebSocket-Server über `socket.io`.
   - Der Server bestätigt die Verbindung und wartet auf Nachrichten.

2. **Nachrichten senden**:
   - Der Benutzer gibt eine Nachricht ein und sendet sie ab.
   - Der Client sendet die Nachricht zusammen mit dem Benutzernamen an den Server.

3. **Nachrichten empfangen und speichern**:
   - Der Server empfängt die Nachricht, speichert sie in der CouchDB und sendet sie an alle verbundenen Clients.

4. **Nachrichten anzeigen**:
   - Jeder Client empfängt die Nachricht und zeigt sie im Chatbereich an, wobei der Benutzername und die Nachricht in unterschiedlichen Farben dargestellt werden, um gesendete und empfangene Nachrichten zu unterscheiden.

### 4. Technologien und Bibliotheken

- **Node.js**: Laufzeitumgebung für serverseitiges JavaScript.
- **Express**: Web-Framework für Node.js zur Erstellung des HTTP-Servers.
- **Socket.io**: Bibliothek für WebSocket-Kommunikation zwischen Client und Server.
- **Nano**: CouchDB-Client für Node.js zum Verwalten der Datenbank.
- **Bootstrap**: CSS-Framework zur Gestaltung einer ansprechenden Benutzeroberfläche.

## Installation und Ausführung

### Voraussetzungen

- Node.js und npm müssen installiert sein.
- CouchDB muss installiert und konfiguriert sein.

### Schritte

1. **Repository klonen**:
```bash
   git clone <repository-url>
   cd my-websocket-app
```

2. **Abhängigkeiten installieren**:

```bash
    npm install
```
3. **CouchDB konfigurieren**:

    Stellen Sie sicher, dass CouchDB läuft und setzen Sie die URL in config/db.js entsprechend.

4. **Server starten**:

```bash
    npm start
```

4. **Anwendung im Browser öffnen**:

    Öffnen Sie ```http://localhost:3000``` in Ihrem Browser.

5. **Nutzung**:
    Geben Sie Ihren Benutzernamen in das Eingabefeld ein und klicken Sie auf "Set Name".
    Geben Sie eine Nachricht ein und klicken Sie auf "Send" oder drücken Sie die Enter-Taste. Sehen Sie sich den Chatverlauf an, um gesendete und empfangene Nachrichten zu sehen.