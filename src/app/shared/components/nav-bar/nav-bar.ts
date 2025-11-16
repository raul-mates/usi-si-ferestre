import {Component, inject, OnInit, signal} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {INavigationButton} from './nav-bar.model';
import {filter} from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar implements OnInit {
  navigationLinks = signal<INavigationButton[]>([
    {id: 1, routerLink: '/homepage', label: 'Acasa'},
    {id: 2, routerLink: '/about-us', label: 'Despre noi'},
    {id: 3, routerLink: '/products', label: 'Produse'},
    {id: 4, routerLink: '/contact', label: 'Contact'}
  ])
  currentUrl = signal<string>('');
  private _router = inject(Router);

  ngOnInit() {
    this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this.currentUrl.set(event.urlAfterRedirects))
  }
}
