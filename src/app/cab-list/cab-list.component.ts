import { Component, OnInit } from '@angular/core';
import { CabService } from '../../cab.service'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cab-list',
standalone: true,
imports:[NgFor],
  templateUrl: './cab-list.component.html',
  styleUrls: ['./cab-list.component.css']
})
export class CabListComponent implements OnInit {
  cabs: any[] = [];

  constructor(private cabService: CabService) { }

  ngOnInit(): void {
    this.cabService.getAllCabs().subscribe(data => {
      this.cabs = data;
    });
  }
}
