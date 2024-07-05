import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserNameDisplayService } from '../user-name-display.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  userDisplayName?:any | string;
  //userDisplayName2?:any | string;
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private sharedService: UserNameDisplayService){
    this.getData();
  }

  getData(){
    sessionStorage.clear()
    this.sharedService.myReferenceSubj$.subscribe(data => {
           sessionStorage.setItem('myData', data)
           this.userDisplayName = sessionStorage.getItem('myData')
     });
   } 

  ngOnInit(): void {     
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.userDisplayName = params['name'];      
    // });
  }

  onLogout() {    
    localStorage.removeItem('token');
    this.router.navigateByUrl("/base/login");

  }
}
