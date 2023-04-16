import { Component } from '@angular/core';

@Component({
  selector: 'app-detailing-services',
  templateUrl: './detailing-services.component.html',
  styleUrls: ['./detailing-services.component.scss']
})
export class DetailingServicesComponent {
  showFED: boolean = false;
  showFID: boolean = false;
  showTP: boolean = false;
  showPC: boolean = false;

  showCard: boolean = true;

}
