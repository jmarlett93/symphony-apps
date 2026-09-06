import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'sym-application-shell',
  imports: [MatButtonModule, RouterLink, RouterOutlet],
  templateUrl: './application-shell.html',
  styleUrl: './application-shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationShell {}
