import { Routes } from '@angular/router';
import { CabListComponent } from './cab-list/cab-list.component';
import { CabDetailngComponent } from './cab-detailng/cab-detailng.component';
import { BookCabComponent } from './book-cab/book-cab.component';

export const routes: Routes = [

    { path: 'cab-list', component: CabListComponent },
  { path: 'cab-detail/:cabNo', component: CabDetailngComponent },
  { path: 'book-cab', component: BookCabComponent },
  { path: '', redirectTo: '/cab-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/cab-list' }
];
