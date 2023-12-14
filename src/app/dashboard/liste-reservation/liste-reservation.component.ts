import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/service/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css']
})
export class ListeReservationComponent implements OnInit {
  listeReservation: any = {};
  constructor(private reservationService: ReservationService, private _router : Router){}
  ngOnInit(): void {
    this.recuperReservation();
  }

  recuperReservation() {
    console.log("reached heretoo");
    this.reservationService.getAllReservation().subscribe(
      (data) => {
        console.log(data);
        this.listeReservation = data;
        console.log("this listereservation", this.listeReservation)
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
