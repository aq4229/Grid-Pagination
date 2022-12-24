import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UserJson } from './Json/UserData';
// import {MatPaginator, MatTableDataSource} from '@angular/material';
export interface Element {
  username: string;
  emailaddress: string;
  phoneNumber: string;
  status: string;
  socialConnection: string;}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filtertype!: Element
  displayedColumns = ['username', 'emailaddress', 'phoneNumber', 'status', 'socialConnection'];
  FilterType: any = [
    { value: 'username', viewValue: 'Username' },
    { value: 'emailaddress', viewValue: 'Email Address' },
    { value: 'phoneNumber', viewValue: 'Phone Number' },
    { value: 3, viewValue: 'Status' },
    { value: 4, viewValue: 'Social Connection' },
  ];
  dataSource = new MatTableDataSource<Element>(UserJson);
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

constructor(){}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      debugger
      this.dataSource.filteredData.filter((x: any) => `${x.this.filtertype}`== this.dataSource.filter)
      this.dataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
