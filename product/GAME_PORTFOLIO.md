# Collaborative Game Portfolio

**Status:** product exploration baseline  
**Related product contract:** `product/PRODUCT_REQUIREMENTS.md`

## 1. Portfolio thesis

The platform should offer short, browser-native coworker events where collaboration produces the memorable moments. Winning can create excitement, but the lasting payoff should be the shared save, ridiculous failure, surprising invention, dramatic reveal, or story that coworkers discuss afterward.

The strongest catalog is not a collection of unrelated minigames. Each game should reuse an event format:

1. Join without an account.
2. Form balanced teams.
3. Learn one simple interaction.
4. Receive a timed challenge.
5. Collaborate through distinct roles or shared control.
6. Lock a decision, build, or lineup.
7. Play, test, or resolve it.
8. Reveal memorable moments.
9. Vote positively on artifacts and moments.
10. Finish with team-level results and a social souvenir.

This common rhythm lets the product add new genres without rebuilding event setup, team management, presence, reconnect, moderation, voting, scoring, and results every time.

## 2. Product principles for every game

### Collaboration is mechanically necessary

- Every active participant has information, authority, or control that matters.
- Roles rotate so one skilled or outspoken participant cannot permanently dominate.
- Team success requires handoffs, joint decisions, complementary actions, or shared artifact creation.
- The game creates protected contribution opportunities for quieter participants.
- No participant should lack a meaningful action for more than approximately 90 seconds.

### Failure remains social and recoverable

- Mistakes create repair routes, salvage, funny mutations, consolation goals, or comeback opportunities.
- A disconnected participant does not invalidate a team's challenge.
- Losing a match does not mean leaving the event.
- The product describes fictional systems, machines, and game objects as failing—not coworkers.
- Every team finishes with something worth remembering.

### Competition and camaraderie are separate

- Objective game rules decide tournament winners.
- Social recognition rewards teamwork moments, recoveries, artifacts, and delight.
- A popular vote should not overturn a clearly earned competitive result.
- The final experience may celebrate both a champion and a camaraderie favorite.
- Ties and shared category awards are acceptable outcomes.

### Scores are entertainment, not employee analytics

- Results belong to a team and one event.
- Do not score or export individual creativity, reaction speed, accuracy, speaking time, mistakes, leadership, or communication.
- Do not produce persistent employee rankings.
- Do not expose individual voting histories.
- Host analytics remain operational: joins, disconnects, completion, moderation, and service health.

### Spectators continue participating

Spectators and eliminated teams can:

- predict outcomes;
- follow or switch between courts and rooms;
- send curated, rate-limited reactions;
- mark replay highlights;
- vote for positive awards;
- play consolation matches or side challenges;
- choose cosmetic themes or symmetric future-round modifiers.

Spectators should not grant unequal competitive advantages during a live match.

### Accessibility is part of each game's rules

- Essential state is available in semantic HTML outside PixiJS canvases.
- Keyboard, touch, and screen-reader-supported flows are designed with the game, not added afterward.
- Voice can enrich collaboration but is never the only viable channel.
- Structured pings, text, visual signals, and persistent instructions support silent play.
- Color, sound, motion, dragging, fine motor precision, and rapid tapping are never the sole way to understand or perform an essential action.
- Timers support relaxed presets, extensions, and calm presentation where competitive integrity permits.
- Reduced-motion, high-contrast, scalable-text, and muted-audio experiences remain complete.

## 3. Shared event engine

### Event phases

The reusable phase engine supports:

- arrival;
- team assignment;
- tutorial;
- challenge brief;
- private contribution or role planning;
- team collaboration;
- submission or lineup lock;
- play, simulation, or resolution;
- recovery;
- gallery or replay;
- voting;
- results;
- optional rematch or next round.

The server owns phase, timer, permissions, seed, score, and transitions. Clients render current state and submit validated intentions.

### Team and role system

- Teams normally contain two to six participants.
- Each game declares virtual roles and rules for combining them at smaller team sizes.
- Role assignment accounts for prior roles so authority rotates throughout an event.
- A role can own private information, a build area, a control console, or a final decision.
- Role ownership is enforced by the server rather than relying on social convention.
- Teams can use host-assigned, self-selected, or automatically balanced rosters.

### Reconnect and dropout

- Guests receive an event-scoped participant identity and rotating rejoin credential.
- The server reserves the participant's seat and role during a short recovery window.
- Reconnect restores the current phase, team, role, private information, artifact version, and relevant score state.
- After the recovery window, essential capabilities become claimable or merge into another role.
- A returning participant re-enters at a safe checkpoint without overwriting newer team work.
- Connectivity problems never reduce a team's social or competitive score.

### Voting engine

The platform supports categorical approval voting and randomized pairwise comparisons.

Default safeguards:

- Hide authorship and team identity until ballots close.
- Exclude a team's own artifact from its ballot.
- Randomize presentation order separately for each voter.
- Hide partial totals to avoid anchoring.
- Normalize results by eligible exposure rather than raw vote count.
- Permit abstention.
- Use positive, specific categories instead of a single "best" vote.
- Keep voter identity private.
- Combine audience votes into a capped aggregate ballot where needed.
- Award shared recognition when results tie.

When votes affect the numeric game score, the total subjective boost should normally remain below 10%.

### Results and score sheets

Every event produces:

- objective tournament or challenge results;
- team-level collaboration facts inherent to the game;
- a replay, artifact, route, machine, bot, broadcast, or story;
- positive peer-voted awards;
- one or more system-generated factual highlights;
- communal event totals;
- an accessible HTML result;
- optional image or PDF export.

Avoid last-place callouts. A score sheet is a souvenir of the event, not an assessment.

## 4. Recommended catalog sequence

### 1. Rally Partners

Launch with a familiar competitive anchor that validates realtime play, tournament orchestration, reconnect, spectators, and social scoring.

### 2. One-Button Wonder

Add collaborative construction, versioned shared artifacts, objective simulation, replay, and bounded peer voting.

### 3. Festival of Lost Signals

Add role-specific private views, deep communication, declarative puzzle content, and capability reassignment.

### 4. Relay Forge Arena

Combine the proven tournament and builder foundations into a premium battle-bot tentpole.

### Optional faster second-game path

Contraption Cabinet can precede One-Button Wonder when rapid catalog validation matters more than physics-engine reuse. It is less technically demanding but requires stronger user-generated-content moderation.

## 5. Flagship concept: Rally Partners

### Promise

A fast 2v2 arcade-tennis event where partners call shots, cover space, rotate through a bracket, and celebrate improbable saves.

### Team and match format

- Fixed teams of two.
- Four-minute sets or first to a small target score.
- Sudden-death point when the match timer ends tied.
- One active court per match with multiple concurrent courts per event.
- Swiss qualification followed by a featured top-four playoff for larger groups.
- Round robin or best-of-three for small groups.
- Consolation courts continue after championship elimination.

### Collaboration

- Partners divide front and back coverage.
- A structured "Mine" call communicates intent.
- Alternating contacts and setup-to-finish sequences build a Trust meter.
- Both partners approve spending the Trust meter on a limited team save or precision boost.
- Positioning assistance keeps strategic communication more important than mechanical expertise.

### Spectator experience

- Switch between concurrent courts.
- Follow teammates and selected matches.
- Predict the next point or match result.
- Send curated cheers.
- Mark replay candidates.
- Vote on highlights after the round.

### Competitive score

- Match wins and losses.
- Points and differential.
- Opponent strength or Swiss tiebreak.
- Playoff placement.

### Camaraderie sheet

- Longest rally.
- Partner assists.
- Successful calls and handoffs.
- Comeback points.
- Opponent variety.
- Audience cheers.
- Best Save, Cleanest Setup, and Most Supportive Duo ribbons.

### MVP

- One polished court and ruleset.
- Keyboard controls with accessible alternatives.
- Team formation.
- Three Swiss rounds.
- Top-four playoff.
- Consolation rotation.
- Spectator switching, predictions, and curated reactions.
- Server-selected replay moments.
- Blind highlight voting.
- Team result card.

### Main risks

- Latency-sensitive ball movement.
- Skill imbalance.
- Mobile control quality.
- Bot or substitute behavior during reconnect.
- Fair scheduling when team count is odd.

## 6. Flagship concept: One-Button Wonder

### Promise

Teams build a deliberately overcomplicated machine, press one button, and discover whether it can complete a simple ridiculous task.

### Team roles

- Architect places parts.
- Mechanic connects triggers and moving elements.
- Operator runs tests and interprets behavior.
- Inspector tracks budget and challenge constraints.

Roles combine for smaller teams and rotate between rounds.

### Round format

1. Ninety-second challenge brief and planning.
2. Eight-minute build.
3. Two short practice runs.
4. Submission lock.
5. Three authoritative official runs.
6. Replay reveal.
7. Anonymous category voting.

A complete round should take approximately 12–15 minutes.

### Objective scoring

Recommended 100-point base:

- 50 points for task checkpoints.
- 20 points for reliability across official runs.
- 15 points for prompt-specific constraints.
- 10 points for resource efficiency.
- 5 points for completion time.

Partial completion remains visible and worth celebrating.

### Peer delight boost

Voting can add zero to eight points but never subtract points.

Example categories:

- Most Delightfully Overengineered.
- Best Heroic Near-Miss.
- Most Satisfying Chain Reaction.
- Best Recovery.

### Social climax

- Teams start official machines together.
- The event view cuts between successes, collapses, and near misses.
- Selected moments replay in slow motion.
- Team identities appear only after relevant ballots lock.
- Every machine receives a factual or positive category highlight.

### Score sheet

- Machine portrait and name.
- Checkpoint path.
- Reliability.
- Fastest official run.
- Transfer count.
- Parts and budget used.
- Delight boost.
- Replay strip.
- Generated machine accolade.

### MVP

- Two-dimensional snap grid.
- Six components: rolling object, ramp, pivot arm, spring, rotating paddle, and target.
- Three authored challenges.
- Shared place, connect, delete, and undo operations.
- Two practice and three official runs.
- Server-authoritative test simulation.
- Replay gallery.
- Anonymous pairwise voting.
- Accessible part tray and text inspector.
- Team souvenir card.

### Lower-risk fallback

Parcel Panic replaces continuous physics with a deterministic conveyor-grid builder. Teams design a sorting depot, then watch a timed rush expose elegant routes and cascading jams.

## 7. Flagship concept: Festival of Lost Signals

### Promise

Teams repair an interdimensional broadcast festival, but every participant sees a different scrambled console or piece of information.

### Team roles

- Navigator sees routes and spatial relationships.
- Decoder holds symbol or transformation rules.
- Tuner manipulates controls.
- Archivist searches prior transmissions.
- Operator executes sequences.
- Verifier checks constraints and commits solutions.

Roles merge at lower counts and rotate after each act.

### Event format

- Arrival and accessibility setup.
- Unscored tutorial signal.
- Three transmissions lasting approximately 8–12 minutes each.
- Role rotation between transmissions.
- Final synchronization.
- Broadcast showcase and positive voting.
- Team broadcast card.

### Collaboration

- Each player holds incomplete but necessary information.
- The team invents shared descriptions for symbols and controls.
- Some puzzles create parallel subproblems that require delegation.
- Wrong answers alter the broadcast and open a recovery route.
- Voice, text, structured pings, and shared notes remain equivalent communication paths.

### Scoring

- Signal objectives restored.
- Optional discoveries.
- Successful synchronized actions.
- Recovery achievements.
- Unused hint energy.

Do not score individual response time, speaking time, clue accuracy, or error ownership.

### Social climax

The system turns choices, harmless errors, and recoveries into a short generated broadcast. Teams can opt out before it is shown. The group then votes for positive categories such as:

- Best Emergency Save.
- Most Unexpected Translation.
- Boldest Broadcast.
- Most Mysterious Discovery.
- Strongest Comeback.

### MVP

- Teams of two to six.
- Three reusable puzzle grammars:
  - symbol-description matching;
  - ordered control synchronization;
  - schedule and routing deduction.
- Three role rotations.
- One recoverable malfunction system.
- Spectator predictions.
- Showcase voting.
- Generated team score sheet.

## 8. Flagship concept: Relay Forge Arena

### Promise

Teams design a constrained sports bot, then rotate control through short objective-based arena matches.

### Product positioning

This should feel like a colorful robot sport rather than a destruction simulator. Bots push, tether, block, shield, collect, and control territory. Temporary disablement ends in a quick reboot rather than elimination.

### Bot construction

Each bot has bounded bays:

- frame;
- drive;
- tool;
- utility;
- fallback behavior.

Every component has visible strengths, weaknesses, mass, energy cost, and cooldown. Invalid builds are prevented before lock.

Each teammate owns at least one build bay and confirms its final selection. This limits the ability of one experienced participant to dictate the entire design.

### Live roles

- Pilot controls movement and the primary tool.
- Navigator sees a wider map and places team waypoints.
- Systems operator allocates energy.
- Tactician sees cooldown information and issues limited tactical calls.

The bot has the same number of virtual consoles regardless of team size. Smaller teams combine consoles without gaining or losing mechanical power.

### Mandatory handoffs

- Matches contain four short control legs.
- Pilot authority transfers at each boundary.
- No participant pilots consecutive legs.
- Console assignments rotate across tournament matches.
- The server owns each control lease and rejects stale inputs.

### Tournament format

- Two teams: best-of-three.
- Three to five teams: round robin.
- Six or more teams: Swiss qualification.
- Larger events: top-four or top-eight playoff.
- Eliminated teams continue through consolation matches, obstacle trials, replay marking, scouting cards, or a cooperative finale.

### Social score sheet

- Competitive record.
- Relay control and core deliveries.
- Successful handoffs.
- Balanced console use.
- Build adaptations.
- Comeback moments.
- Opponent kudos.
- Shared replay.
- Smoothest Handoff, Cleverest Counter, Best Recovery, and Good-Sport awards.

### MVP

- One symmetrical arena.
- One territory-and-delivery mode.
- Eight to twelve components.
- Four virtual consoles.
- Four mandatory pilot legs.
- Three Swiss rounds.
- Top-four playoff.
- Consolation matchmaking.
- Positive awards.
- Deterministic replay.

### Main risks

- Component balance.
- Accessible alternatives for spatial control.
- Making support consoles as satisfying as driving.
- Preventing specialist domination.
- Deterministic simulation and replay.
- Tournament and reconnect complexity.

## 9. Flagship concept: Contraption Cabinet

### Promise

Teams progressively invent, mutate, label, and unveil a fictional object designed to solve an absurd harmless problem.

### Contribution roles

- Prompt Scout chooses a problem.
- Sketcher creates the initial form.
- Mutator adds a surprising requirement.
- Labeler names controls and parts.
- Copywriter writes a slogan.
- Demonstrator creates an optional presentation or typed script.

Roles rotate. Drawing, shape placement, stamps, and textual description are equivalent contribution modes.

### Event loop

1. Select a fictional problem.
2. Create an initial silhouette or description.
3. Add a constraint.
4. Add controls and labels.
5. Add a name and slogan.
6. Prepare an optional demonstration.
7. Lock the artifact.
8. Enter a blind gallery.
9. Replay its layer-by-layer transformation.
10. Reveal creators and awards.

### Voting

Use sparse positive tokens:

- Grin.
- Ingenious.
- Transformation.

Hide creators and partial totals until voting closes. Live demonstrations can earn reactions but should not change the competitive artifact vote, preventing charismatic presenters from dominating.

### Score sheet

- Final artifact and accessible description.
- Layer-by-layer strip.
- Category badges.
- Curated reactions.
- Participation stamps.
- Communal totals.
- Optional accessible HTML, image, or PDF export.

### MVP

- Curated fictional prompts.
- Text, shapes, stamps, labels, and simple drawing.
- Autosave and reconnect.
- Blind randomized gallery.
- Three category ballots.
- Reveal playback.
- Typed demonstration script.
- Host moderation queue.
- Team artifact card.

### Main risk

User-generated content creates moderation and workplace-safety requirements earlier than simulation-focused games.

## 10. Flagship concept: The Great Maybe Machine

### Promise

Teams operate departments of a whimsical machine, exchanging strange resources and interpreting partial forecasts to launch a shared impossible celebration.

### Team roles

- Navigator selects a project after hearing the team.
- Analyst receives a forecast fragment.
- Builder allocates resources.
- Envoy negotiates binding exchanges.
- Storykeeper names the result.
- Optional Safeguard and Scout roles support larger teams.

Final authority rotates each round.

### Round format

1. Public briefing.
2. Private information scan.
3. Protected team contribution round.
4. Open discussion.
5. Structured inter-team market.
6. Simultaneous commitment.
7. Complication reveal.
8. Recovery choice.
9. Positive event spotlight.

### Scoring dimensions

- Stability: shared event-wide success.
- Wonder: team project completion.
- Harmony: aid and joint projects.
- Spark: recovery and amusing mutations.

The collective outcome appears before team recognition.

### Social climax

Teams cast sealed, equally weighted choices for the machine's final launch. The selected ending reflects accumulated Stability. Participants then assign positive citations to other teams before a project-gallery reveal.

### MVP

- Four rounds and finale.
- Six rotating roles.
- Four resources.
- Versioned project and complication decks.
- Binding bilateral and public offers.
- Simultaneous commitments.
- Recovery choices.
- Spectator predictions.
- Positive citations.
- Team score sheet.

### Main risks

- Authored-content volume.
- Rules onboarding.
- Facilitation tuning for 30–50 people.
- Maintaining lively inter-team negotiation without creating noise or cliques.

## 11. Secondary concept backlog

### Sports and arcade

- **Button House:** collaborative curling with separate aim, release, and sweep roles.
- **Scramble Links:** team mini-golf where everyone shoots and the team selects which ball to continue from.
- **Baton Blitz:** relay racing with short runner legs and teammate-operated support actions.
- **Skycourt:** arcade volleyball that rewards three-player touch sequences.
- **Pit Crew Prix:** one driver plus navigators, energy managers, and repair roles.
- **Bank Shot Social:** teammates independently set aim, power, spin, and risk for a combined target throw.

### Builders

- **Cardboard Canyon:** build an improbable bridge and test escalating loads.
- **Wobbly Rover Rally:** construct an autonomous junk rover for a cargo course.
- **Monster Assembly Manual:** combine individually created parts into one specification-driven creature.
- **Tiny Town Fire Drill:** design a miniature venue that survives benign simulated disruptions.
- **Crash-Test Carnival:** build a fictional-payload landing system.
- **Clockwork Canteen:** program wind-up helpers to assemble bizarre orders.

### Battle bots

- **Command Queue Derby:** teams program short command sequences that resolve simultaneously.
- **Split-Console Siege:** driver, systems, navigation, and repair information appear on different screens.
- **Salvage Draft Autobrawl:** draft components, set priorities, then watch automated matches.
- **Botathlon:** bots compete across racing, carrying, pushing, and control disciplines.
- **Payload Pact:** escort and obstruct around a neutral cargo objective.
- **Boss Bot Breakout:** cooperative encounters seed a later team playoff.

### Cooperative puzzles

- **The Crooked Museum:** route absurd exhibits using incompatible maps and catalog clues.
- **Message in Many Bottles:** transform a message through several constrained media before the final reveal.
- **Creature Translation Bureau:** infer an original fictional symbolic language together.
- **Clockwork Carnival:** restart attractions through distributed control booths.
- **Weather Factory:** satisfy contradictory fictional forecasts using split information.
- **Archive of Almost-True Stories:** reconstruct a harmless fictional event from fragmented evidence.

### Creative party games

- **Forked Folktales:** teammates contribute branches, callbacks, and endings to a fictional story.
- **Caption Time Capsule:** arrange and reinterpret abstract scenes as future museum artifacts.
- **One-Line Habitat:** extend a shared fictional habitat through drawing, shapes, or text.
- **Patch Notes for a Planet:** mutate a tiny world and replay its version history.
- **Dub Club:** caption an original silent animation.
- **Trailer Backwards:** build a story in reverse from its final frame.
- **Impossible Help Desk:** resolve surreal support requests with kind absurdity.

### Social strategy

- **Forecast Foundry:** schedule deliveries from partial weather probabilities.
- **Council of Pocket Worlds:** negotiate mutually beneficial policies for fictional worlds.
- **The Wandering Workshop:** neighboring teams contribute complementary parts to shared crafts.
- **Atlas of Almost-There:** infer one surreal map from isolated team regions.
- **Signal Garden:** decode abstract compatibility rules to grow a shared garden.
- **Cargo Chorus:** coordinate a fleet with distributed capacities and destination clues.
- **The Backup Parade:** neighboring teams coordinate routes, supplies, and recoveries.

## 12. Product safeguards

### Workplace safety

- Humor targets fictional objects and situations, never identifiable coworkers.
- Do not ask for confessions, personal stories, performance judgments, or impressions of colleagues.
- Participation through voice, camera, drawing, or live presentation is optional.
- Passing on a public performance never reduces the score.
- Use curated content by default.
- Do not retain raw chat, voice, or artifacts longer than required without explicit opt-in.

### Moderation

- Expiring private invitation links.
- Host admission lock.
- Host remove and event-level block.
- Generated team names and curated emblems.
- Profanity and personal-information checks.
- Moderator preview for user-generated artifacts.
- Replace rejected content privately with a safe fallback.
- Participant report and local-hide actions.
- Curated-only kill switch.
- Rate-limited reactions.

### Fairness

- Comparable seeded challenge difficulty.
- Team-size-normalized virtual roles and actions.
- Objective scoring against fixed challenge rules rather than other teams' productivity.
- Hidden voting authorship.
- No self-voting.
- Normalized ballot exposure.
- No paid competitive influence.
- No manager tie-break.

## 13. Portfolio validation gates

A game should not enter full production until playtests demonstrate:

1. Most participants understand their first meaningful action without facilitator intervention.
2. Every teammate contributes during each major round.
3. Teams naturally discuss plans, handoffs, or interpretations.
4. Failure produces laughter or recovery rather than disengagement.
5. Disconnected participants recover without becoming duplicates.
6. Smaller and larger teams receive equivalent mechanical power.
7. Spectators remain active without determining competitive outcomes.
8. Subjective voting is perceived as fair and changes objective standings only modestly.
9. Keyboard, touch, reduced-motion, and non-voice paths remain complete.
10. The final score sheet feels like a souvenir rather than an assessment.
11. A host can run the event without becoming a full-time facilitator.
12. The game supports its promised participant count under representative network conditions.

## 14. Recommended immediate discovery work

### Rally Partners prototype

- Test whether four-minute doubles produces enough partner communication.
- Compare fixed teams with rotating partners.
- Validate Swiss timing at 4, 8, 16, and 24 teams.
- Test local-paddle prediction under realistic latency.
- Determine whether spectators understand rallies without commentary.
- Validate which telemetry creates enjoyable score-sheet highlights.

### One-Button Wonder paper and technical prototype

- Test role ownership using a paper part deck before implementing shared editing.
- Prototype one authoritative challenge with six components.
- Compare physics construction with Parcel Panic's deterministic grid.
- Test anonymous pairwise delight voting.
- Measure whether failures feel funny, fair, and understandable.
- Validate simultaneous official tests within the expected server budget.

### Shared platform prototype

- Implement the phase engine independently from tennis.
- Model roles, teams, authority leases, and reconnect as reusable concepts.
- Prototype positive categorical ballots.
- Generate one accessible team score sheet from event facts.
- Exercise an eliminated team through consolation play, voting, and results.
