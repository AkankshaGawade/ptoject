import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CabService } from '../../cab.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cab-detailng',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cab-detailng.component.html',
  styleUrl: './cab-detailng.component.css'
})
export class CabDetailngComponent implements OnInit {
  cab: any;

  constructor(
    private route: ActivatedRoute,
    private cabService: CabService
  ) {}

  ngOnInit(): void {
    const cabNoParam = this.route.snapshot.paramMap.get('cabNo');
    const cabNo = cabNoParam ? +cabNoParam : null;

    if (cabNo !== null) {
      this.cabService.getCabByNo(cabNo).subscribe(
        data => {
          this.cab = data;
        },
        error => {
          // Handle the error as needed, e.g., show a message to the user
          console.error('Error fetching cab details:', error);
        }
      );
    } else {
      // Handle the case where cabNo is null
      console.error('Invalid cab number');
  }
  }
}
