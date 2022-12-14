import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp } from 'src/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class SellerServiceService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  userSignup(data: signUp) {
    console.warn('service called');
    this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
    .subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      
      localStorage.setItem("seller", JSON.stringify(result.body));
      this.router.navigate(['seller-home']);

      console.warn('result: ' + result );
    });
  }
  reloadSeller(){
    if(localStorage.getItem("seller") != null){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
  }
}
}
