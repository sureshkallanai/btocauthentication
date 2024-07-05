import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  public constructor() {
    this.showNavigation$ = this.showNavigation.asObservable();
  }
  public showNavigation$: Observable<boolean>;

  private showNavigation: Subject<boolean> = new Subject<boolean>();  

  public setNavigationVisibility(visible: boolean): void {
    this.showNavigation.next(visible);
  }  
}
