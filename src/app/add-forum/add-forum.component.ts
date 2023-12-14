import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forum } from '../getforums/forum';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.css']
})
export class AddForumComponent {
  newForum: Forum = {
    idForum: 0,
    titre: '',
    description: ''
  };

  constructor(private http: HttpClient) {}

  addForum() {
    // Set the CORS headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    // Send POST request
    console.log(this.newForum);
    this.http.post('http://localhost:8086/api/forum/ajouterForum', this.newForum, httpOptions)
      .subscribe(
        response => {
          console.log('Forum added:', response);
          // Reset the form after successful submission
          this.resetForm();
        },
        error => {
          console.error('Error adding forum:', error);
        }
      );
  }

  resetForm() {
    this.newForum = {
      idForum: 0,
      titre: '',
      description: ''
    };
  }
}