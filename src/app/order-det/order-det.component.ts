import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-det',
  templateUrl: './order-det.component.html',
  styleUrls: ['./order-det.component.scss']
})
export class OrderDetComponent implements OnInit {

  order_info:any;
  orderProd_info:any;
  constructor(private api:ApiService, private activatedRoute:ActivatedRoute){}
  
  ngOnInit()
  {
    this.activatedRoute.params.subscribe((res:any)=>{
      this.api.order_det(res.order_id).subscribe((response:any)=>{
        console.log(response)
        this.order_info = response.order_det[0];
        this.orderProd_info = response.order_products;
        console.log(this.order_info);
      })
    })
  }
}
