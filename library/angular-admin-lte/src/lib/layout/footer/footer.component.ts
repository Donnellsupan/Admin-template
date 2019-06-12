import { Component, ContentChild, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';

import { FooterService } from './footer.service';

/**
 * Footer Left
 */
@Component({
  selector: 'mk-layout-footer-left',
  template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
})
export class FooterLeftComponent {
  @ViewChild('templateRef', { static : false}) public templateRef: TemplateRef<any>;
}

/**
 * Footer Right
 */
@Component({
  selector: 'mk-layout-footer-right',
  template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
})
export class FooterRightComponent {
  @ViewChild('templateRef', { static : false}) public templateRef: TemplateRef<any>;
}

@Component({
  selector: 'mk-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ContentChild(FooterLeftComponent, { read: true, static: false }) public footerLeftComponent: FooterLeftComponent;
  @ContentChild(FooterRightComponent, { read: true, static: false }) public footerRightComponent: FooterRightComponent;

  constructor(
    private elementRef: ElementRef,
    private footerService: FooterService
  ) {}

  ngOnInit() {
    this.footerService.elementRef = this.elementRef;
  }
}
