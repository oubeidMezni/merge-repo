import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transportation } from 'src/app/transport/transport';

@Component({
  selector: 'app-addtransportation',
  templateUrl: './addtransportation.component.html',
  styleUrls: ['./addtransportation.component.css']
})
export class AddtransportationComponent {
  newTransportation: Transportation = {
    id: 0,
    departureLocation: '',
    destination: '',
    departureTime: "",
    arrivalTime: "",
    transportType: '',
    capacity: 0,
    availableSeats: 0,
    price: 0,
   
  };

  constructor(private http: HttpClient) {}

  addTransportation() {
    // Send POST request
    console.log(this.newTransportation)
    this.http.post('http://localhost:8090/api/transportations', this.newTransportation)
      .subscribe(
        response => {
          console.log('Transportation added:', response);
          // Reset the form after successful submission
          this.resetForm();
        },
        error => {
          console.error('Error adding transportation:', error);
        }
      );
  }

  resetForm() {
    this.newTransportation = {
      id: 0,
      departureLocation: '',
      destination: '',
      departureTime: "",
      arrivalTime: "",
      transportType: '',
      capacity: 0,
      availableSeats: 0,
      price: 0,
    };
  }
}