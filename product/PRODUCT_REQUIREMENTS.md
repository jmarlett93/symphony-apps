# Product Requirements: Effortless Coworker Game Hangouts

## 1. Product summary

An online platform where one organizer can create and pay for a lightweight virtual game hangout, then invite coworkers to join instantly in a browser. Guests should not need accounts, installs, payment details, or setup. The first game is a playful two-player tennis simulation that supports a larger group rotating through matches and spectating together.

Working promise: **create in minutes, join in one click, recover from interruptions automatically.**

## 2. Founding product principles

1. **Fast**
   - An organizer can create and share a playable event in under two minutes.
   - An invited guest can enter the party in under 15 seconds from opening a valid link.
   - The game loads quickly on a typical corporate laptop and ordinary broadband connection.

2. **Effortless**
   - Only the organizer needs an account.
   - Guests choose a display name and join; no password, installation, or payment is required.
   - Refreshes, network changes, closed tabs, and device switches recover gracefully.

3. **Web native**
   - The complete experience works in supported desktop browsers.
   - Links are the primary invitation and identity mechanism.
   - Mobile browsers provide a useful join, spectate, chat/reaction, and reconnect experience; touch play may be offered when the game can support it well.

4. **Relaxed and social**
   - Competition is low-stakes, easy to understand, and forgiving.
   - People waiting to play remain part of the activity.
   - Audio/video conferencing is not required; the party works alongside the coworkers' existing call.

5. **Trustworthy**
   - A party is isolated from every other customer and event.
   - Payment, identity, access, and reconnect behavior are understandable and predictable.
   - Hosts can control unwanted participation without becoming administrators.

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

## 4. Users and roles

### Host

The sole required registered user. The host creates and pays for events, shares invitations, starts or ends play, and moderates the room.

### Guest

An invited participant represented by an event-scoped guest identity. A guest does not create a platform account and cannot access any other event with that identity.

### Player

A host or guest currently assigned to one of the two tennis controls.

### Spectator

A participant watching the current match and able to queue, react, and follow the result.

## 5. Primary end-to-end journey

1. A new host selects **Create a party**.
2. The host enters an email address and receives a time-limited magic sign-in link.
3. After opening the link, the host chooses an event title, date/time, time zone, expected group size, and available game package.
4. The host sees the full price and what is included, then completes payment through Stripe.
5. The platform creates the event and shows:
   - a private guest invitation link;
   - a separate host management link or authenticated dashboard entry;
   - event date/time, supported group size, and browser guidance;
   - copy-link and copy-invitation-message actions.
6. A guest opens the invitation, enters a display name, accepts concise participation rules, and joins the event lobby.
7. Before play, everyone can see who is present, test controls, and join or leave the player queue.
8. The host starts the party. The platform chooses the next two eligible players, begins a short countdown, and starts tennis.
9. Spectators watch live, see the score and queue, and send lightweight reactions.
10. At match end, the result appears and the platform rotates players according to the visible queue. The host can skip the wait or start the next match early.
11. If someone disconnects, their place is reserved briefly and clearly shown. Reopening the invitation restores them when possible.
12. The host ends the event, or it closes automatically after its purchased duration and grace period. Attendees see a friendly end screen; the host can view a basic event summary.

## 6. Functional requirements

### 6.1 Host account and magic-link authentication

- A host can request a sign-in link using an email address.
- The UI always gives a neutral response so it does not reveal whether an email is registered.
- Magic links are single-use, expire after a short documented period, and return the host to the action they began.
- A host can request a replacement link and is rate-limited with clear, non-technical messaging.
- A signed-in host stays signed in across refreshes on the same browser until session expiry or sign-out.
- A host can sign out from the dashboard.
- A host can request account deletion and see what happens to upcoming and completed paid events before confirming.
- No password setup or password-reset flow is required.

### 6.2 Host dashboard

- The host can see upcoming, active, canceled, and completed events.
- Each event shows its local date/time, status, package/duration, attendee limit, and payment state.
- The host can open event management, copy the invitation, resend the invitation to themselves, and view a receipt link.
- The host can change an upcoming event's title, start time, and time zone within documented purchase constraints.
- The host can cancel an upcoming event and is shown the refund policy before confirmation.
- The host can re-enter and manage an active event from any supported browser after magic-link authentication.

### 6.3 Event creation and checkout

- Creation captures:
  - event title;
  - scheduled date and local time;
  - explicit time zone;
  - expected participant count;
  - purchasable package or duration;
  - acceptance of terms and refund policy.
- Pricing, currency, taxes when applicable, participant cap, duration, and included game access are displayed before checkout.
- Stripe Checkout or an equivalent Stripe-hosted payment surface collects payment details; the platform does not directly collect card data.
- The host can recover from canceled, failed, delayed, or duplicated checkout attempts without creating duplicate charges or unusable events.
- An event becomes confirmed only after verified payment completion.
- The host receives an email confirmation and receipt, plus an invitation link suitable for forwarding.
- If payment confirmation is delayed, the UI presents a pending state and updates without requiring repeated payment.
- Refund and cancellation outcomes are reflected in the dashboard and emailed to the host.

### 6.4 Invitations and event access

- Every event has a high-entropy, revocable invitation URL.
- Opening an invitation shows the event name, host display name if provided, scheduled time in the viewer's local time zone, and event status before joining.
- A guest supplies a display name. Duplicate names receive a friendly disambiguator rather than blocking entry.
- A guest gets an event-scoped identity stored on the device and backed by a recoverable signed token.
- A host can rotate the invitation link. The old link stops admitting new guests but does not eject participants already admitted.
- A host can lock or unlock admission.
- A host can remove a participant and optionally block that guest identity for the remainder of the event.
- Removed or blocked users see a clear status and cannot immediately rejoin using their old recovery token.
- Events enforce their participant cap, with an informative full-room screen and automatic admission if space becomes available while the guest waits.
- Links for upcoming events show a waiting screen; links for ended, canceled, refunded, invalid, or expired events show an appropriate non-sensitive explanation.

### 6.5 Lobby and presence

- The lobby displays all present participants, the host, current connectivity state, and who is queued to play.
- Participants can change their own display name during the event.
- Participants can mark themselves ready, join the player queue, leave the queue, and spectate.
- The host can start once the minimum number of ready players is available.
- A first-time participant sees a short controls tutorial and can practice locally without affecting the party.
- The UI warns users about unsupported browsers, blocked storage, lost connectivity, excessive latency, or another active tab using the same participant identity.
- Presence distinguishes online, briefly disconnected, and departed users without exposing technical details.

### 6.6 Tennis game

- The first game is a simple real-time two-player tennis experience rendered in the browser.
- Each player controls one side using keyboard controls; optional touch controls may be enabled for supported mobile layouts.
- The game includes:
  - a pre-match player announcement and countdown;
  - clear controls;
  - authoritative ball, paddle, collision, score, serve, and match state;
  - a visible target score and win condition;
  - pause/recovery behavior;
  - match result and next-match transition;
  - basic sound with mute controls;
  - reduced-motion and non-color-only status cues.
- The active players, score, connection health, and next players are visible to everyone.
- Spectators receive a synchronized view but cannot affect gameplay.
- The server resolves game outcomes; clients cannot submit scores as facts.
- If an active player disconnects:
  - gameplay pauses for a short recovery period;
  - the player's slot is reserved and a countdown is visible;
  - a successful reconnect resumes safely;
  - timeout results in a no-contest or forfeit according to a clearly displayed rule, then advances the queue.
- If both players disconnect, the match pauses and eventually closes without blocking the party.
- The host can pause, resume, abandon a stuck match, or advance to the next queued players.

### 6.7 Queue, rotation, and social participation

- The player queue is visible and ordered consistently for all participants.
- Joining the queue places the participant at the end; leaving removes them.
- After a match, default rotation gives waiting participants priority and avoids the same pair monopolizing play.
- If no one is waiting, players can rematch.
- The host can reorder or remove queue entries to resolve event flow issues; changes are visibly attributed to the host.
- Spectators can send a small curated set of ephemeral reactions.
- Reactions are rate-limited, can be muted locally, and contain no user-authored text in MVP.
- Text chat, voice, and video are not required for MVP; the product is designed to accompany an existing meeting call.

### 6.8 Ghost, reconnect, rejoin, and multi-tab behavior

- Temporary network loss does not immediately remove a participant or queue position.
- The client automatically retries with bounded backoff and shows reconnecting state without blocking navigation or accessibility tools.
- A returning guest can recover their event-scoped identity using the same browser or their signed rejoin link/token during the event recovery window.
- The server is authoritative for party membership, queue, role, score, and match state.
- Reconnection receives a current snapshot plus subsequent ordered updates; the client does not assume missed local state is valid.
- Each identity has one active gameplay connection. If the same identity opens another tab or device, the user is told which connection is active and can explicitly take over.
- A stale connection cannot continue controlling a player after takeover or expiry.
- Duplicate connect/disconnect events are idempotent and do not create ghost participants.
- A participant who intentionally chooses **Leave party** is marked departed and removed from the queue; merely closing a tab preserves a short rejoin opportunity.
- Hosts can always reclaim host control after re-authentication.
- Server restarts or instance replacement preserve purchased events and recover active party state to a documented safe point. At worst, an in-progress rally may reset; payment, membership, queue, and match score must not be lost.

### 6.9 Event lifecycle

- Event statuses are: draft, payment pending, confirmed, open, active, ending, completed, canceled, and refunded.
- The lobby can open a configurable period before the scheduled start.
- The host can start early within allowed package constraints.
- A visible timer communicates remaining event time and the ending grace period.
- Near expiry, all participants receive non-disruptive warnings.
- Expiry does not terminate a rally without warning; it ends at a safe boundary or after a short maximum grace period.
- After completion:
  - guests see an end screen;
  - invitation and rejoin tokens no longer admit users;
  - the host sees attendee count, matches completed, event duration, and payment/receipt information;
  - no detailed employee performance ranking is created.

### 6.10 Notifications and transactional email

- Hosts receive sign-in links, purchase confirmation, receipt access, schedule-change confirmation, cancellation/refund confirmation, and a reminder before the event.
- Emails identify the event and contain a safe route back to authenticated event management.
- Guests are invited by a host-shared link in MVP; the platform does not require guest email addresses.
- Delivery failures do not lose the purchased event; the dashboard remains the source of truth.

### 6.11 Support, safety, and privacy

- Every critical screen links to concise help and a contact/support path.
- Error messages include a user-actionable next step and a support reference code when appropriate.
- The host can report a payment or event problem from the event page.
- The service collects the minimum guest data needed to operate an event.
- Guest identities and activity are scoped to one event and removed or anonymized according to a documented retention period.
- The product states what participant and gameplay data the host can see.
- Hosts can export or delete their account data subject to payment and legal retention requirements.
- Terms, privacy notice, cookie/storage notice, refund policy, and acceptable-use rules are available before purchase.

## 7. Cross-party and tenant isolation requirements

- An event is the primary live-party tenant boundary.
- Every live command, query, connection, snapshot, and persisted record is authorized against both event and participant identity.
- A participant token for one event cannot discover, join, observe, or control another event.
- Concurrent parties may use the same display names and game resources without sharing state.
- Capacity exhaustion or a faulty party must degrade that party without corrupting another.
- Logs and support tooling use internal identifiers and avoid exposing invitation or rejoin secrets.

## 8. Accessibility and device support

- All non-canvas flows meet WCAG 2.2 AA targets.
- Lobby, queue, checkout handoff, moderation, and results are fully keyboard navigable with meaningful focus management and screen-reader labels.
- The game offers keyboard controls, high-contrast visuals, non-color-only score/state cues, mute, volume control, and reduced motion.
- Essential event status and score have an accessible DOM representation outside the rendering canvas.
- Desktop Chrome, Edge, Firefox, and Safari versions supported by the product are tested explicitly.
- Mobile Safari and Chrome support invitation opening, lobby, presence, queue, reactions, spectating, and reconnect. Mobile gameplay is labeled supported or unavailable based on capability, never allowed to fail silently.
- Responsive layouts work at 320 CSS pixels wide and under browser zoom.

## 9. Quality and operational experience

- Loading states never invite duplicate checkout or event-creation actions.
- All mutating user actions are safe to retry.
- The platform provides a friendly maintenance/unavailable state and preserves the ability to retry.
- Time is stored unambiguously and shown with a time zone.
- Party status and important controls remain usable under moderate latency.
- Client telemetry must not capture invitation links, magic links, rejoin secrets, card data, or unnecessary personal data.

## 10. MVP scope boundaries

### Included

- Email magic-link host accounts.
- One-time event purchase through Stripe.
- Host dashboard and event lifecycle.
- Link-based accountless guest access.
- Real-time lobby, presence, queue, spectator reactions, and two-player tennis.
- Concurrent isolated parties.
- Reconnect, rejoin, takeover, and ghost cleanup.
- Host moderation and event summary.
- Responsive and accessible core flows.

### Not required for MVP

- Subscriptions, seat licenses, invoicing, or enterprise procurement.
- Native iOS or Android apps.
- Built-in voice, video, screen sharing, or free-form text chat.
- Public event discovery.
- Persistent guest profiles or social graphs.
- Tournaments, global leaderboards, or employee performance analytics.
- Multiple simultaneous courts in one event.
- A game creator marketplace.
- SSO, SCIM, organization administration, or team workspaces.

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

## 12. Product decisions to validate after MVP

- Best event package: fixed duration, group-size tiers, or a combination.
- Ideal tennis match length and rotation rule for groups of different sizes.
- Whether mobile touch play meets the product's quality bar.
- Whether hosts need direct email invitations or calendar integrations.
- Whether persistent organizations improve repeat purchase enough to justify added account complexity.
- Which second game best proves the platform can support a broader catalog.
