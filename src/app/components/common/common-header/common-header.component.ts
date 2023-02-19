import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {UserService} from "../../../_services/user.service";
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {
  currentUrl = '';
  isLoggedIn:any = 'false'
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
   @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset >= 94;
    let current:any = "";
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop-150) {
      current = section.getAttribute("id"); }
  });
  console.log("current==",current)
  
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
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
   


    this.isLoggedIn = localStorage.getItem('isLoggedIn');
    let loginUser = localStorage.getItem('loginUser');
    
    if(loginUser) {
      this.loginUser = loginUser;
      this.loginUserName =loginUser;
      this.userName = localStorage.getItem('name')
    }
    // if(this.loginUser=='state_officer') {
    //   this.loginUserName = 'State Officer'
    // } else if(this.loginUser=='state_manager') {
    //   this.loginUserName = 'State Manager'
    // } else if(this.loginUser=='iva') {
    //   this.loginUserName = 'IVA'
    // } else if(this.loginUser=='morth_manager') {
    //   this.loginUserName = 'MoRTH Manager'
    // }
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
