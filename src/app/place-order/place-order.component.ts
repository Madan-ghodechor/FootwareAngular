import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent {

  constructor(private api:ApiService, private router:Router){}

  saveAddress(data:any)
  {
    this.api.placeOrder(data.value).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['/order_det/'+res.order_id])
    })
  }
}
