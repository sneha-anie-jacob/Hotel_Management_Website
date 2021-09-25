import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder,Validators} from '@angular/forms';
import { UserModel } from './user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user={
    fname:'',
    lname:'',
    email:'',
    pnumber:'',
    pwd:''
  }
  registerVerify(){
    alert("Registered Successfully")
    this._auth.loginUser(this.user)
    alert("Success");
    this.router.navigate(['/login']);
  }

  constructor(private _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  
}
    

