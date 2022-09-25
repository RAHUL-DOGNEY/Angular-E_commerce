import { Component, OnInit } from '@angular/core';
import { SellerServiceService } from '../services/seller-service.service';
import {Router} from '@angular/router';
import { signUp } from 'src/data-type';


@Component({
  selector: 'app-selling-auth',
  templateUrl: './selling-auth.component.html',
  styleUrls: ['./selling-auth.component.css']
})
export class SellingAuthComponent implements OnInit {

  constructor(private seller:SellerServiceService,private router:Router) { }

  ngOnInit():void{
    this.seller.reloadSeller();
  }
  
  signUp(data:signUp):void{
    console.warn(data)
    // this.seller.userSignup(data).subscribe((result)=>{
    //   console.warn(result);
    //   if(result){
    //     this.router.navigate(['seller-home']);
    //   }
    // });


    this.seller.userSignup(data)
  }
}
