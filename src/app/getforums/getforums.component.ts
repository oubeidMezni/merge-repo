import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forum } from './forum';

@Component({
  selector: 'app-getforums',
  templateUrl: './getforums.component.html',
  styleUrls: ['./getforums.component.css']
})
export class GetforumsComponent {
  dataArray:Forum[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForums();
  }

  getForums() {
    const url = 'http://localhost:8099/api/forum';
    this.http.get<Forum[]>(url).subscribe(
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
