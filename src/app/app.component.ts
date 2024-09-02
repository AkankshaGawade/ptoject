import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabService } from '../cab.service';
import { Person } from '../Person';
import { NgFor } from '@angular/common';
import { CabListComponent } from './cab-list/cab-list.component';
import { CabDetailngComponent } from './cab-detailng/cab-detailng.component';
import { BookCabComponent } from './book-cab/book-cab.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor,CabListComponent,CabDetailngComponent,BookCabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'angular-routing';
  contactlist: any;
  tempContactList: any
  constructor(private service: CabService) {
    this.contactlist = service.getAllCabs()
 
  }
  addClickHandler() {
    const p: Person = {
      id: 9,
      fullName: "Namarta",
      phone: 456789234,
      email: "n@gmail.com"
    }
    this.contactlist=this.service.createCab(p).subscribe((p:Person)=>{
      console.log();

    });
   
  }
  showAllHandler() {
    this.contactlist = this.service.getAllCabs();
   return  this.service.getAllCabs().subscribe((aryper: Person[]) => {
      this.contactlist = aryper
    }
    );

  }

  searchHandler(name: string) {
    this.tempContactList = this.service.getCabsByPlace(name);
  }
}
