import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.router.navigate(["/"]);
    localStorage.setItem("profile", "user");
    
    //this.router.onSameUrlNavigation = "reload";

    setTimeout(() => {
      
      window.location.reload();
      
      //this.router.onSameUrlNavigation = "reload";
    }, 1);
    //window.location.reload();
    //this.router.navigate(["/"])
  }

}
