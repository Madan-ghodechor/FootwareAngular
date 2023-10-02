import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {

  cat_id:any;
  cat_name:any;
  product_det:any;
  loader = true;
  constructor(private api:ApiService ,private activedroutes:ActivatedRoute){
    this.activedroutes.params.subscribe( (res:any)=>{
      // console.log(res);
      this.cat_id = res.id;
      this.cat_name = res.name;
      this.ngOnInit();
    })
  }

  ngOnInit()
  {
    this.api.getProductById(this.cat_id).subscribe((res:any)=>{
      console.log(res);
      this.product_det=res;
      this.loader = false
    })
  }

}
