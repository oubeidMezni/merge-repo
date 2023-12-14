import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/Environnement/environement';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private UrlBackend= environement.baseurl;

  constructor(private http:HttpClient) { }
  getAllReservation()
  {
    console.log("reached here")
    return this.http.get(`http://localhost:8099/api/reservations`);
  }


}
