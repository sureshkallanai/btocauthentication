import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayService } from '../../display.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit, OnDestroy{
  userDisplayName?:any | string;
  isDivVisible: any;  
  userAccess() {  
    this.router.navigateByUrl("/base/user");
  }
  dataAccess() {  
    this.router.navigateByUrl("/base/data");
  }
    constructor(private router: Router,private displayService: DisplayService) { }
   
    ngOnInit() {         
      this.displayService.setNavigationVisibility(false);        
    }
    ngOnDestroy(): void {
      this.displayService.setNavigationVisibility(true);
    }
      }
