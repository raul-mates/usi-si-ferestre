import {Routes} from '@angular/router';
import {Homepage} from './pages/homepage/homepage';
import {UnderConstruction} from './pages/under-construction/under-construction';

export const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'homepage', component: Homepage},
  {path: 'about-us', component: UnderConstruction},
  {path: 'products', component: UnderConstruction},
  {path: 'contact', component: UnderConstruction},
];
