import { Component, OnInit } from '@angular/core';
import { RoomserviceService } from '../roomservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newroom',
  templateUrl: './newroom.component.html',
  styleUrls: ['./newroom.component.css']
})
export class NewroomComponent implements OnInit {

  constructor(private roomService: RoomserviceService,private router: Router) { }

  roomItem={
    roomId:'',
    roomName:'',
    description:'',
    price:'',
    imageUrl:''
  }

  

  ngOnInit(): void {
  }
  AddRoom()
  {    
    this.roomService.newRoom(this.roomItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }

}
