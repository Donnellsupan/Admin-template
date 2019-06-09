import { Component, OnInit, AfterViewInit } from '@angular/core';
//import Prism = require('prismjs');


@Component({
  selector: 'app-service-admin',
  templateUrl: './service-admin.component.html',
  styleUrls: ['./service-admin.component.css']
})
export class ServiceAdminComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //Prism.highlightAll();
  }
  
}
