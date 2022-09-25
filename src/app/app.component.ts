import { Component } from '@angular/core';
import { SellerServiceService } from './services/seller-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private seller:SellerServiceService){}

  title = 'E-commerce';
  
}
