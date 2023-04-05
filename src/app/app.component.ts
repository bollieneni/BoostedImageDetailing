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
        label: 'Services',
        command: () => this.router.navigateByUrl('/services')
      },
      {
        label: 'Book Appointment',
        command: () => this.router.navigateByUrl('/bookappointment')
      },
      {
        label: 'Contact Us',
        command: () => this.router.navigateByUrl('/contactus')
      }
    ];
  }
}