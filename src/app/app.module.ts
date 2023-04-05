import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DetailingServicesComponent } from './detailing-services/detailing-services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ManageUserProfileComponent } from './manage-user-profile/manage-user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    DetailingServicesComponent,
    AboutUsComponent,
    BookAppointmentComponent,
    UserLoginComponent,
    ManageUserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule, InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
