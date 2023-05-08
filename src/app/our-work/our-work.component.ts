import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {

  Images: ImageData[] = [];
  constructor(private serv: AppService, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.serv.GetImage(1).subscribe(event => {
      let href = URL.createObjectURL(event);
      this.Images.push({
        FileId: "1",
        FileURI: this.sanitizer.bypassSecurityTrustUrl(href),
        Description: "2023 BMW iX | Full Car PPF | CQUARTZ Finest Reserve "
      });
    }, error => { console.log() })
  }
}

interface ImageData {
  FileId: string;
  FileURI: SafeUrl;
  Description: string;
}