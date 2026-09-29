## 11. Feature-complete acceptance scenarios

The MVP is end-user feature complete when all of the following pass in supported browsers:

1. A first-time host signs in by magic link, purchases an event exactly once, and shares its invitation.
2. At least the purchased capacity of guests can join without accounts, including duplicate display names.
3. Two or more events run concurrently with no observable cross-event data or control.
4. A group can move from lobby to repeated tennis matches through queue rotation until event completion.
5. A player refreshes, loses connectivity, and reconnects during a match without becoming a duplicate or permanently losing identity.
6. A guest opens a second tab, performs an explicit takeover, and the old tab can no longer control play.
7. A disconnected player fails to return; the recovery timer resolves the match and the party continues.
8. The host refreshes or changes device, re-authenticates, and regains event control.
9. The host locks admission, removes a participant, rotates the invitation, pauses a match, and safely ends the event.
10. Failed, canceled, pending, and successful Stripe payment paths each produce one understandable and recoverable product state.
11. Full rooms, early arrivals, expired links, canceled events, event expiry, and service interruption each show an actionable state.
12. Keyboard-only and screen-reader users can complete host setup and all guest social flows, while essential game state is available outside the canvas.
