import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {

  userData:any;
  constructor(private api:ApiService){
    this.api.getUserProfile().subscribe((res:any)=>{
      console.log(res);
      this.userData = res.data[0];
      console.log(this.userData)
    })
  }
}
