import { Component, OnInit, AfterViewInit } from '@angular/core';
//mport Prism = require('prismjs');

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

   ngAfterViewInit() {
  //   Prism.highlightAll();
   }
}
