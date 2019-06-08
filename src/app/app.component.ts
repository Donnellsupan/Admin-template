import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customLayout: boolean;
  isAuthenticated: boolean;

  constructor(
    private router: Router,
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    // this.customLayout = true;
    // this.router.navigate(["/"]);
    //
    if (localStorage.getItem("profile") === null) {
      console.log(true)
      this.customLayout = true;
      this.router.navigate(["/login"]);
    } else {
      console.log("false")
      this.customLayout = false;

      //this.router.navigate(["/"]);
      


      // this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      //   console.log("dsfd", localStorage.getItem("profile"))
      //   this.customLayout = value;
      //   //this.isAuthenticated = true;
      //   // if(localStorage.getItem("profile") === null){
      //   // this.router.navigate(["/home"]);
      //   // }
      // });
    }


  }
}
