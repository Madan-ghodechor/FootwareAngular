import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  catList:any;
  slider_det:any;
  product_det:any;
  loader=true;

  constructor(private api:ApiService){}
  ngOnInit()
  {
    this.api.getCatList().subscribe((res:any)=>{
      this.catList =  res;
    });
    this.api.getSliderDetails().subscribe((res:any)=>{

      this.slider_det = res;
      console.log(res)
    })
    this.api.getProductDetails().subscribe((res:any)=>{
      this.product_det = res.reverse();
      console.log(res)
    })
    this.loader = false;
  }
}
