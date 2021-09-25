import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { RoomserviceService } from './roomservice.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewroomComponent } from './newroom/newroom.component';
import { ShowroomsComponent } from './showrooms/showrooms.component';
import { RoomsComponent } from './rooms/rooms.component';
import { EditroomsComponent } from './editrooms/editrooms.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { BookroomsComponent } from './bookrooms/bookrooms.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    GalleryComponent,
    ContactsComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NewroomComponent,
    ShowroomsComponent,
    RoomsComponent,
    EditroomsComponent,
    BookroomsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   ],
  providers: [AuthService,RoomserviceService,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
