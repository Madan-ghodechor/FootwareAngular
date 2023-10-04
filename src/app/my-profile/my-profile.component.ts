import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {

  token:any;
  userData:any;
  constructor(private api:ApiService, private router:Router){
    this.api.getUserProfile().subscribe((res:any)=>{
      console.log(res);
      this.userData = res.data[0];
      console.log(this.userData)
      this.token = localStorage.getItem('token');
    })
  }
  userLogOut()
  {
    localStorage.clear();
    this.token = localStorage.getItem('token');
    this.router.navigate(['/login'])
  }
}
