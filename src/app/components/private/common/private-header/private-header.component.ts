import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {UserService} from "../../../../_services/user.service";
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.css']
})
export class PrivateHeaderComponent implements OnInit {
  currentUrl = '';
  isLoggedIn = 'false'
  isSticky=false;
  loginUser: any = '';
  loginUserName='';
  userName: any='';
  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   this.isSticky = window.pageYOffset >= 94;
  // }

  constructor(private userService: UserService,private scroller: ViewportScroller, private router: Router, @Inject(DOCUMENT) private document: Document) {
    this.currentUrl = this.router.url;
    console.log("this.currentUrl==",this.currentUrl)
    
   }

  

  goToModule() {
    this.scroller.scrollToAnchor("modules");
  }
  goToContactUs() {
    this.scroller.scrollToAnchor("contact");
  }
  goToHome() {
    this.scroller.scrollToAnchor("home");
  }

  ngOnInit(): void {
   


    let isLogin = localStorage.getItem('isLoggedIn');
    let loginUser = localStorage.getItem('loginUser');
    
    if(isLogin) {
      this.isLoggedIn = isLogin
    }
    if(loginUser) {
      this.loginUser = loginUser;
      this.loginUserName =loginUser;
      this.userName = localStorage.getItem('name')
    }
   
    console.log("isLogin=",this.isLoggedIn)
  }

  onLogOut() {
    this.userService.onLogout();
    this.router.navigate(['/'])
  }
  onClickBell() {
    this.router.navigate(['/proposal-list'])
  }

}
