import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    usr:'',
    pwd:''
  }
  // loginUser(){
  //   alert("Successful Login")
  // }

  constructor(private _auth:AuthService,private _router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

loginUser(){
  alert("Successful Login")
  this._auth.loginUser(this.user)
  .subscribe(
    res => {
      localStorage.setItem('token', res.token)
      this._router.navigate(['/rooms'])
    },
    err => {
      console.log(err);
      this._router.navigate(['/rooms'])
    }
  ) 
}



}