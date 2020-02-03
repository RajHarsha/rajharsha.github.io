import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftnavbar',
  templateUrl: './leftnavbar.component.html',
  styleUrls: ['./leftnavbar.component.sass']
})
export class LeftnavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectHome() {
    window.scrollTo(500, 700);
  }
  selectAbout() {
    window.scrollTo(200, 1400);
  }
  selectservice() {
    window.scrollTo(200, 2100);
  }
  selectskills() {
    window.scrollTo(200, 3300);
  }
}
