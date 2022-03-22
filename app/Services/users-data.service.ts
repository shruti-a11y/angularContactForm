import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }
     
  demoapi(fdata: FormData){
    return this.http.post('http://localhost/AngularContactForm/api.php',fdata,{responseType:'text'});
  }

    // getUsers(){
    //   return this.http.get<Users[]>('http://localhost/AngularContactForm/list.php');
    // }
}
      