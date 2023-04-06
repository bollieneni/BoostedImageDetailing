import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailingServicesComponent } from './detailing-services/detailing-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ManageUserProfileComponent } from './manage-user-profile/manage-user-profile.component';
import { HomeComponent } from './home/home.component';
import { CoatingComponent } from './coating/coating.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: HomeComponent },
  { path: 'services', component: DetailingServicesComponent },
  { path: 'coating', component: CoatingComponent },
  { path: 'ourwork', component: CoatingComponent },
  { path: 'pricing', component: CoatingComponent },
  { path: 'bookappointment', component: BookAppointmentComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'manageprofile', component: ManageUserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
