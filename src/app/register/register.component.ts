import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private api:ApiService, private router:Router){}

  registerForm = new FormGroup({
    user_name : new FormControl(''),
    user_mobile : new FormControl(''),
    user_email : new FormControl(''),
    user_password : new FormControl('')
  })
  SaveForm(){
    console.log(this.registerForm.value);
    this.api.registerUser(this.registerForm.value).subscribe((res:any)=>{
      console.log(res);
      if(res.status=="success")
      {
        this.router.navigate(['/']);  
      }
    })
  }
}
