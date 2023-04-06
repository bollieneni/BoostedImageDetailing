import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        command: () => this.router.navigateByUrl('/')
      },
      {
        label: 'About',
        command: () => this.router.navigateByUrl('/aboutus')
      },
      {
        label: 'Detailing',
        command: () => this.router.navigateByUrl('/services')
      },
      {
        label: 'Coating',
        command: () => this.router.navigateByUrl('/coating')
      },
      {
        label: 'Our Work',
        command: () => this.router.navigateByUrl('/ourwork')
      },
      {
        label: 'Pricing',
        command: () => this.router.navigateByUrl('/pricing')
      },
      {
        label: 'Schedule Appointment',
        command: () => this.router.navigateByUrl('/bookappointment')
      },
      {
        label: 'Contact',
        command: () => this.router.navigateByUrl('/contactus')
      }
    ];
  }
}