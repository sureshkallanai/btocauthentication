import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayService } from './display.service';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'CMSSearch';
  showNavigation = true;
  private destroyed: Subject<void> = new Subject<void>()
  constructor(private displayService: DisplayService) { }
  ngOnDestroy(): void {
    this.displayService.setNavigationVisibility(true);
  }
  
  ngOnInit() {
    this.runmethod();    
  } 

 runmethod(){
 this.displayService.showNavigation$.pipe(takeUntil(this.destroyed)).subscribe((visible: boolean) => {
      this.showNavigation = visible;
    });   

 }
}
