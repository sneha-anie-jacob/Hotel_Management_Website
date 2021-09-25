import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookroomsComponent } from './bookrooms/bookrooms.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditroomsComponent } from './editrooms/editrooms.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewroomComponent } from './newroom/newroom.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ShowroomsComponent } from './showrooms/showrooms.component';


const routes: Routes = [{path:'',component:HomeComponent},{path:'home',component:HomeComponent},
{path:'events',component:EventsComponent},{path:'gallery',component:GalleryComponent},
{path:'contact',component:ContactsComponent},{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},{path:'rooms',component:NewroomComponent},
{path:'showrooms',component:ShowroomsComponent},{path:'add',canActivate:[AuthGuard],component:RoomsComponent},
{path:'editrooms',component:EditroomsComponent},{path:'bookrooms',component:BookroomsComponent},
{path:'payment',component:PaymentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
