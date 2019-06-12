import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  itemShow: number = 10;
  @Output()
  onChange: EventEmitter<any> = new EventEmitter();

  data: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input()
  set value(value: any) {
    if (value) {
      this.data = value;
      this.itemChange();
    }
  }

  constructor() { }

  itemChange() {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
    this.data.paginator = this.paginator;
  }

  ngOnInit() {
  }

}
