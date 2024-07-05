import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,retry } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { ContactType } from '../models/ContactType';
import { CRNSearch } from '../models/crnsearch';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService implements OnInit {

  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {   
  }

  getUserInfo(userLogin:UserLogin): Observable<any>
  {    
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    return this.httpclient.post("https://localhost:7285/api/token", userLogin, {headers:reqHeader, responseType: 'text'});
 
  }  
  getContactType(): Observable<ContactType[]>
  {        
    return this.httpclient.get<ContactType[]>("https://localhost:7285/api/ContactType"); 
  }  
  getSingleUser(email:string): Observable<UserLogin>
  {        
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    return this.httpclient.get<UserLogin>("https://localhost:7285/api/GetSingleUser?Email="+email); 
  }  
  getCRNSerach(CRNNumber:string): Observable<CRNSearch[]>
  {        
    return this.httpclient.get<CRNSearch[]>("https://localhost:7285/api/CRNSearch?CRNNumber="+CRNNumber); 
  } 
  getAllCRNSerach(): Observable<CRNSearch[]>
  {        
    return this.httpclient.get<CRNSearch[]>("https://localhost:7285/api/GetAllCRNSearch"); 
  } 
}
