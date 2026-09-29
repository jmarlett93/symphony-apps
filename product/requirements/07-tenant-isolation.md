## 7. Cross-party and tenant isolation requirements

- An event is the primary live-party tenant boundary.
- Every live command, query, connection, snapshot, and persisted record is authorized against both event and participant identity.
- A participant token for one event cannot discover, join, observe, or control another event.
- Concurrent parties may use the same display names and game resources without sharing state.
- Capacity exhaustion or a faulty party must degrade that party without corrupting another.
- Logs and support tooling use internal identifiers and avoid exposing invitation or rejoin secrets.
