import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) { }
  base_url = "https://a2zithub.org/dairy/abi/"
  getCatList()
  {
    return this.http.get(this.base_url+"product_cat_details")
  }

  // user_register
  registerUser(obj:any)
  {
    return this.http.post(this.base_url+"user_register", obj)
  }

  // user_login
  loginUser(obj:any)
  {
    return this.http.post(this.base_url+"user_login", obj);
  }

  // get slider_det
  getSliderDetails(){
    return this.http.get(this.base_url+'slider_det');
  }

  //get product_det
  getProductDetails()
  {
    return this.http.get(this.base_url+'product_det');
  }

  // get product by cat_Id
  getProductById(id:any)
  {
    var obj = {'cat_id':id}
    return this.http.post(this.base_url+'products_by_cat',obj)
  }

  // product_info by Product Id
  getProductInfo(prod_id:any)
  {
    var obj = {'product_id':prod_id,'token':localStorage.getItem('token')}
    console.log(obj)
    return this.http.post(this.base_url+'product_by_id',obj)
  }

  // Add to Cart =>  addtocart
  addProductToCart(prod_id:any)
  {
    var obj = {'product_id':prod_id,'token':localStorage.getItem('token')}
    console.log(obj)
    return this.http.post(this.base_url+'addtocart',obj)
  }

  // cart list
  getCardList()
  {
    var obj = {'token':localStorage.getItem('token')};
    return this.http.post(this.base_url+'cart_list',obj);
  }

  //  decQnt
  decProductQnt(id:any)
  {
    var obj = {'product_econ_cart_id':id,'token':localStorage.getItem('token')};
    return this.http.post(this.base_url+'dec_cart_qty',obj);
  }

  // incQnt
  incProductQnt(id:any)
  {
    var obj = {'product_econ_cart_id':id,'token':localStorage.getItem('token')};
    return this.http.post(this.base_url+'inc_cart_qty',obj);
  }
  removeFromCart(id:any)
  {
    var obj = {'product_econ_cart_id':id,'token':localStorage.getItem('token')};
    return this.http.post(this.base_url+'remove_cart_qty',obj);
  }

  // place_order 
  placeOrder(data:any)
  {
    data.token = localStorage.getItem('token');
    return this.http.post(this.base_url+'place_order',data)
  }
  // order_det
  order_det(id:any)
  {
    var obj = {'order_id':id,'token':localStorage.getItem('token')};
    return this.http.post(this.base_url+'order_det',obj)
  }

  getUserProfile()
  {
    var obj = { 'token':localStorage.getItem('token')}
    return this.http.post(this.base_url+'user_profile',obj)
  }

  getOrders()
  {
    var obj = { 'token':localStorage.getItem('token')};
    return this.http.post(this.base_url+'order_list',obj);
  }
}
