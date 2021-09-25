import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-bookrooms',
  templateUrl: './bookrooms.component.html',
  styleUrls: ['./bookrooms.component.css']
})
export class BookroomsComponent implements OnInit {

  constructor(private _auth:AuthService,private _router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  

}
