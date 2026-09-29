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

### Rally Partners delivery phases

Rally Partners is delivered incrementally so the first release proves the core tournament, realtime, reconnect, spectator, and queue loops before adding team complexity.

- **Phase 1 — 1v1 tournaments:** two players compete on one court while the remaining participants queue, spectate, react, and rotate into later matches. Start with a simple tournament format and clear individual match results.
- **Phase 2 — 2v2 tournaments:** add fixed or rotating partner teams, team-specific rules, and collaboration mechanics after the 1v1 experience is stable.
- **Later phases — expanded formats:** add more exciting formats such as multiple courts, partner variants, playoffs, consolation play, predictions, replays, or other social competition only when validated by playtests and capacity testing.

Phase 1 is the MVP game scope. Phase 2 and later formats must not add requirements that are necessary to launch the initial 1v1 tournament experience.

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
