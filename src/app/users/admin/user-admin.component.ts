import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  busy: boolean = true;
  displayedColumns: string[] = [
    "id",
    "lastName",
    "firstName",
    "email",
    "plateNo",
    "status"
  ];

  constructor() { }

  ngOnInit() {
    const data = [{
      id: 1,
      lastName: "Supan",
      firstName: "Aldrich",
      email: "aldrich@gmail.com",
      plateNo: "007",
      status: "Active"
    }, {
      id: 1,
      lastName: "Kabigting",
      firstName: "Ellysia Bernies",
      email: "ellysia@gmail.com",
      plateNo: "007",
      status: "Active"
    }];

    this.dataSource = new MatTableDataSource(data);
  }

  sortData(sort) {
    this.dataSource = new MatTableDataSource(
      this.dataSource.sortData(this.dataSource.data, sort)
    );
  }

  searchAlert(value) {
    // add timer for user typings speed
    setTimeout(() => {
      //this.search = value;
      this.dataSource.filter = value;
      //this.hasRecord = this.dataSource.filteredData.length > 0;
    }, 100);
  }

}
