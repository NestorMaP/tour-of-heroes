import { Component } from '@angular/core';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MessagesComponent,
    RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tour of Heroes';
}
