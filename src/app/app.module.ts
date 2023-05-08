import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { DetailingServicesComponent } from './detailing-services/detailing-services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ManageUserProfileComponent } from './manage-user-profile/manage-user-profile.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';

import { HomeComponent } from './home/home.component';
import { CoatingComponent } from './coating/coating.component';
import { PricingComponent } from './pricing/pricing.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    DetailingServicesComponent,
    AboutUsComponent,
    BookAppointmentComponent,
    UserLoginComponent,
    ManageUserProfileComponent,
    HomeComponent,
    CoatingComponent,
    PricingComponent,
    OurWorkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule, InputTextModule, CheckboxModule,
    ButtonModule, CardModule, MultiSelectModule,
    RadioButtonModule, PanelModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
