import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart_products:any;
  total= 0;
  constructor(private api:ApiService){}

  ngOnInit() {
    this.api.getCardList().subscribe((res:any)=>{
      this.cart_products = res;
      console.log(res);
      this.total=0;
      for(var i=0; i<this.cart_products.length; i++)
      {
        this.total += (this.cart_products[i].qty * this.cart_products[i].price) 
      }
    });
  }
  decQnt(product_econ_cart_id:any, qty:any)
  {
    if(qty==1)
    {
      alert('You Cannot Dec Less Than 1')
    }
    else{
      this.api.decProductQnt(product_econ_cart_id).subscribe((res:any)=>{
        console.log(res);
        this.ngOnInit();
      })
    }
  }
  incQnt(product_econ_cart_id:any)
  {
    this.api.incProductQnt(product_econ_cart_id).subscribe((res:any)=>{
      console.log(res);
      this.ngOnInit();
    })
  }

  removeFromCart(product_econ_cart_id:any)
  {
    if(confirm('You want to Remove From Cart ?'))
    {
      this.api.removeFromCart(product_econ_cart_id).subscribe((res:any)=>{
        console.log(res);
        this.ngOnInit();
      })
    }
  }
}
