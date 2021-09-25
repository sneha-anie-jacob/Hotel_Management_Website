import { Component} from '@angular/core';
import { RoomserviceService } from '../roomservice.service';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  // pageTitle: string = 'Room List';
  // imageWidth: number = 50;
  // imageMargin: number = 2;
  // showImage: boolean = false;


  // rooms=[{
  //   roomId :'',
  //   roomName:'',
  //   description:'',
  //   price:'',
  //   imageUrl:''
  // }]

  // toggleImage(): void{
  //   this.showImage = !this.showImage;
  // }

  // constructor(private router:Router,private roomService: RoomserviceService,public _auth:AuthService) { }

  constructor() { }


  ngOnInit(): void {
  //   this.roomService.getRooms().subscribe((data)=>{
  //     this.rooms=JSON.parse(JSON.stringify(data));
  // })
  }

  // editRoom(room:any)
  // {
  //   localStorage.setItem("editRoomId", room._id.toString());
  //   this.router.navigate(['update']);

  // }
  // deleteRoom(room:any)
  // {
  //   this.roomService.deleteRoom(room._id)
  //     .subscribe((data) => {
  //       this.rooms = this.rooms.filter(p => p !== room);
  //     })
  

  // }

}
