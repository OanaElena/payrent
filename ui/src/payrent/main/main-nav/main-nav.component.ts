import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-nav-component',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  host: {
    'class': 'main-nav'
  }
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
