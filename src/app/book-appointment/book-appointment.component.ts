import { Component } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent {

  mstServices: DropDownOption[] = [];
  selectedServices: any = null;
  CustomerAddress: any;
  Vehical: any = { Year: null, Make: null, Model: null };
  ContactMethod: any;

  constructor() {

    this.mstServices = [{ label: 'Full Exterior Detail', value: 'FEDET' },
    { label: 'Full interior Detail', value: 'FIDET' },
    { label: 'Paint Correction', value: 'PNT' },
    { label: 'SB3 - Coating', value: 'SB3' },
    { label: 'Opti - Coating', value: 'OPT' },
    { label: 'Total Package', value: 'TP' }]

  }

}


interface DropDownOption {
  label: any;
  value: any;
}