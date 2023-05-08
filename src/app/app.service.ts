import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _baseURL = "https://localhost:7199/api/"
  constructor(private http: HttpClient) { }

  GetImage(imageId: any) {
    return this.http.get(this._baseURL + `Images/getimage/${imageId}`, {
      responseType: "blob"
    });
  }
}
