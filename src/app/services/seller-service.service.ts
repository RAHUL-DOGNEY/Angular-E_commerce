import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { signUp } from 'src/data-type';


@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {

  constructor(private http:HttpClient) { }

  userSignup(data:signUp){
    console.warn("service called")
    return this.http.post('http://localhost:3000/seller',data);
  }

}
