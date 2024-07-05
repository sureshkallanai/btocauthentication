import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';
import { ContactType } from '../../models/ContactType';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent  implements OnInit{
  contactTypeList: ContactType[] = [];
  constructor(private userLoginService:UserLoginService,
    public activatedRoute:ActivatedRoute,
    private httpclient:HttpClient,
    private router: Router){ }
  ngOnInit(): void {
    this.userLoginService.getContactType().subscribe(data=>{this.contactTypeList=data})
  }

  onLogout(){
    localStorage.setItem("token","");
    this.router.navigateByUrl("/base/login");
  }
}
