import { Routes } from '@angular/router';
import { Main } from './main/main';
import { About } from './about/about';
import { Partners } from './partners/partners';
import { Joinus } from './joinus/joinus';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
  {path: '', component: Main},
  {path: 'about', component: About},
  {path:'partners', component: Partners},
  {path:'join-us', component: Joinus},
  {path:'**', component: Pagenotfound},
];
