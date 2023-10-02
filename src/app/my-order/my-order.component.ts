import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {

  ordersData:any;
  constructor(private api:ApiService){}

  ngOnInit()
  {
    this.api.getOrders().subscribe((res:any)=>{
      console.log(res);
      this.ordersData = res.order_det;
    })
  }
}
