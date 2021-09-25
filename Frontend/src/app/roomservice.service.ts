import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomserviceService {
  item= {
    roomId:'',
    roomName:'',
    description:'',
    price:'',
    imageUrl:''
  }
  constructor( private http:HttpClient) { }
  getRoom(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getRooms(){
    return this.http.get("http://localhost:3000/rooms");
  }

  newRoom(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"room":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteRoom(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  editRoom(room:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",room)
    .subscribe(data =>{console.log(data)})
  }
}
