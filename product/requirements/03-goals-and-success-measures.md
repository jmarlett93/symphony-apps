## 3. Goals and success measures

### MVP goals

- Let one account holder create, purchase, schedule, share, run, and revisit an event.
- Let guests join a specific event without registering.
- Run multiple isolated parties concurrently.
- Provide a complete social loop around a two-player tennis game: lobby, spectating, queueing, playing, score/results, rematch/rotation, and event ending.
- Recover automatically from ordinary client or network interruption.

### Initial success measures

- At least 80% of hosts who start checkout reach a shareable event.
- At least 90% of guests with a valid invitation enter the lobby without support.
- Median host creation-to-share time is under two minutes.
- Median guest link-to-lobby time is under 15 seconds, excluding unusually slow networks.
- At least 95% of reconnects within the event recovery window restore the prior participant identity and role.
- Fewer than 1% of parties experience state leakage, duplicate active identities, or unrecoverable game state. Any cross-party state leakage is a critical incident.
