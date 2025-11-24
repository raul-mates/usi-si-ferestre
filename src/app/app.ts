import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './shared/components/nav-bar/nav-bar';
import { ContactInfoBar } from './shared/components/contact-info/contact-info-bar';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, ContactInfoBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
}
