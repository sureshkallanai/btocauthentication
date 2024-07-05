import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable({
  providedIn: 'root'
})
export class UserNameDisplayService {
  myReferenceSubj = new ReplaySubject<string>();
  public myReferenceSubj$ = this.myReferenceSubj.asObservable();
  constructor(){}
  setReferenceObject(data: string) {
    this.myReferenceSubj.next(data);
  }  
}
