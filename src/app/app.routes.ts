import { Routes } from '@angular/router';
import {Homepage} from './pages/homepage/homepage';

export const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: Homepage },
];
