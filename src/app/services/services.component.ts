import { Component, OnInit, AfterViewInit } from '@angular/core';
//mport Prism = require('prismjs');

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

   ngAfterViewInit() {
  //   Prism.highlightAll();
   }
}
