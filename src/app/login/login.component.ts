import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private api:ApiService, private router:Router){}

  loginUser = new FormGroup({
    user_mobile : new FormControl(''),
    user_password : new FormControl('')
  });

  getUserLogin()
  {
    this.api.loginUser(this.loginUser.value).subscribe((res:any)=>{
      console.log(res);
      if(res.status=="success")
      {
        localStorage.setItem("token",res.token)
        this.router.navigate(['/']);
      }
    })
  }
}
