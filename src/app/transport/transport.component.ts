import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transportation } from './transport';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  dataArray:Transportation[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTransportations();
  }

  getTransportations() {
    const url = 'http://localhost:8099/api/transportations';
    this.http.get<Transportation[]>(url).subscribe(
      (response) => {
        this.dataArray = response;
        console.log(this.dataArray);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}