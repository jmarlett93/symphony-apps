import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

type MarketingItem = Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>;

@Component({
  selector: 'sym-landing-page',
  imports: [MatButtonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage {
  protected readonly benefits: readonly MarketingItem[] = [
    {
      eyebrow: '01',
      title: 'Set up in minutes',
      description:
        'Choose a time and group size, then send one private invitation link.',
    },
    {
      eyebrow: '02',
      title: 'Join in seconds',
      description:
        'Guests pick a display name and enter—no account, install, or payment details.',
    },
    {
      eyebrow: '03',
      title: 'Keep everyone involved',
      description:
        'A visible queue, quick matches, spectating, and reactions keep the whole group together.',
    },
  ];

  protected readonly steps: readonly MarketingItem[] = [
    {
      eyebrow: 'Host',
      title: 'Create your party',
      description:
        'Pick the event details and get a private room ready for your team.',
    },
    {
      eyebrow: 'Invite',
      title: 'Share one link',
      description:
        'Guests arrive in the lobby from any supported browser without creating an account.',
    },
    {
      eyebrow: 'Play',
      title: 'Rotate through the fun',
      description:
        'Players take turns on court while the rest of the party watches and cheers.',
    },
  ];
}
