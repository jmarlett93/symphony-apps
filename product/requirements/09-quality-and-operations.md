## 9. Quality and operational experience

- Loading states never invite duplicate checkout or event-creation actions.
- All mutating user actions are safe to retry.
- The platform provides a friendly maintenance/unavailable state and preserves the ability to retry.
- Time is stored unambiguously and shown with a time zone.
- Party status and important controls remain usable under moderate latency.
- Client telemetry must not capture invitation links, magic links, rejoin secrets, card data, or unnecessary personal data.
