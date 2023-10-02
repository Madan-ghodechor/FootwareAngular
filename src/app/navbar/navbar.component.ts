import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  catList:any;
  token:any;
  
  constructor(private api:ApiService, private router:Router){
    this.token = localStorage.getItem('token')
    
  }

  ngOnInit()
  {
    this.api.getCatList().subscribe((res:any)=>{
      this.catList =  res;
    })
  }
  userLogOut()
  {
    localStorage.clear();
    this.token = localStorage.getItem('token');
    this.router.navigate(['/login'])
  }
}
