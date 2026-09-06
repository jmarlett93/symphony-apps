import { Component } from '@angular/core';
import { ApplicationShell } from 'application-shell';

@Component({
  imports: [ApplicationShell],
  selector: 'sym-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
