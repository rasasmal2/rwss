import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userTypeList: any=[{code:'officer', name: 'OFFICER'},{code:'school', name: 'SCHOOL'},{code:'teacher', name: 'TEACHER'}]
  // activatedRoute: any;
  loginForm : UntypedFormGroup = new UntypedFormGroup(
    {
      username:new UntypedFormControl("",[Validators.required]),
      password:new UntypedFormControl("",[Validators.required]),
      captchAnswer:new UntypedFormControl("",[Validators.required]),
    }
  );

  constructor(private router: Router, private route: ActivatedRoute, public toasterService: ToastrService){}

  ngOnInit(): void {
    // this.activatedRoute = this.route.snapshot.paramMap.get('name');
    
  }

  onSubmit(event:any) {
    
    if(!this.loginForm.valid) return;
    let obj = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      captcha: this.loginForm.value.captchAnswer,
    }
    
    if(obj.username=='AEE-1' && obj.password=='123456') {
      // this.userService.onLogin(obj);
      localStorage.setItem("isLoggedIn", 'true');
      localStorage.setItem('loginUser', 'Assistant Executive Engineer');
      localStorage.setItem("name", 'Bimal Mahapatra');
      this.router.navigate(['/welcome'])
    } else if(obj.username=='EE-1' && obj.password=='123456') {
      // this.userService.onLogin(obj);
      localStorage.setItem("isLoggedIn", 'true');
      localStorage.setItem('loginUser', 'Executive Engineer');
      localStorage.setItem("name", 'Bimal Kalita');
      this.router.navigate(['/welcome'])
    } 
    else if(obj.username=='CE-1' && obj.password=='123456') {
      // this.userService.onLogin(obj);
      localStorage.setItem("isLoggedIn", 'true');
      localStorage.setItem('loginUser', 'Chief Engineer');
      localStorage.setItem("name", 'Nirmala Roy');
      this.router.navigate(['/welcome'])
    } 
    else if(obj.username=='AUTH-1' && obj.password=='123456') {
      // this.userService.onLogin(obj);
      localStorage.setItem("isLoggedIn", 'true');
      localStorage.setItem('loginUser', 'Authority Engineer');
      localStorage.setItem("name", 'Samir Dashgupta');
      this.router.navigate(['/welcome'])
    }
    else {
      this.toasterService.error("Invalid credential");
    }
  }

  // onSubmit(event:any) {
  //   console.log("form==",event,this.loginForm.value)
  //   if(this.loginForm.status == 'INVALID') {
  //     return;
  //   }
  //   localStorage.setItem('isLoggedIn','true');
  //   this.router.navigate(['/welcome'])
  // }

}
