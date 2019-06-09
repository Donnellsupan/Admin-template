import { Component, OnInit, AfterViewInit } from '@angular/core';
//import Prism = require('prismjs');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  model: any = {}

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //Prism.highlightAll();
  }
}
