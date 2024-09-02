import { Component } from '@angular/core';
import { CabService } from '../../cab.service';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-book-cab',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-cab.component.html',
  styleUrl: './book-cab.component.css'
})
export class BookCabComponent {
  cabNo!: number;
  numOfSeats!: number;

  constructor(private cabService: CabService, private router: Router) {}

  bookCab(): void {
    this.cabService.bookCab(this.cabNo, this.numOfSeats).subscribe(
      () => this.router.navigate(['/cab-list']),
      error => alert('Error booking cab: ' + error.message)
    );
  }
}
