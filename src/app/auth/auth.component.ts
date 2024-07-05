import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user-login';
import { ActivatedRoute } from '@angular/router';
import { UserLoginService } from '../service/user-login.service';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { UserNameDisplayService } from '../user-name-display.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  lblHidden:any;
  userLogin!:UserLogin;
  token:any | undefined;
  constructor(private userLoginService:UserLoginService,
    public activatedRoute:ActivatedRoute,
    private httpclient:HttpClient,
    private router: Router,
  private userNameDisplayService:UserNameDisplayService) { }
  ngOnInit(): void {   
    this.userLogin = {} as  UserLogin;
    this.lblHidden=true;   
  }   
  SignIn(form:NgForm){   
    if(form.value.Emailid!==null&&form.value.Emailid){
this.userLogin.Emailid=form.value.Emailid,
this.userLogin.password =form.value.password
this.userLoginService.getUserInfo(form.value).subscribe((data)=>{this.token=data
  if(data){
 console.log(this.token);
 localStorage.setItem("token",this.token);  
 this.userLoginService.getSingleUser(this.userLogin.Emailid).subscribe((d)=>{
  if(d){ 
    console.log(d.userName);    
    this.userNameDisplayService.setReferenceObject(d.userName);
    //this.router.navigateByUrl("/base/landing?name="+d.userName);}
    this.router.navigateByUrl("/base/landing");}
},(error) => {});
 }
},(error) => {
  this.lblHidden=false;  
  console.log(error.status);
});

}
else{  
}

  } 
  public emitedMyValue(item: any) {
    // use the value here
}
}
