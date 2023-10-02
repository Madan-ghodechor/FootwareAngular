import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  prod_id:any;
  product_details:any;
  constructor(private api:ApiService, private activedroutes:ActivatedRoute){
    this.activedroutes.params.subscribe((res:any)=>{
      this.prod_id = res.product_id
      this.ngOnInit();
    });
  }

  ngOnInit(){
    this.api.getProductInfo(this.prod_id).subscribe((res:any)=>{
      console.log(res)
      this.product_details = res;
    });
  

  }

  addProdToCart()
  {
    this.api.addProductToCart(this.prod_id).subscribe((res:any)=>{
      console.log(res)
      this.ngOnInit();
    })
  }
}
