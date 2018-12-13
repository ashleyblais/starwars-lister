import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Angular Star Wars App';
  apiUrl = "https://swapi.co/api/";

  names = Array<string>();
  data: any;
  isLoading: boolean;
  
  constructor(private http: HttpClient) { }

  onMoviesClicked() {
    this.clearList();

    this.http.get(this.apiUrl + "films")
    .subscribe((data: any[]) => {
      if (data != null) {
        this.data = data["results"];
        this.data.forEach(movie => {
          this.names.push(movie.title);
          this.isLoading = false;
        });
      }
    });
  }

  onCharactersClicked() {
    this.clearList();

    this.http.get(this.apiUrl + 'people')
    .subscribe((data: any[]) => {
      if (data != null) {
        this.data = data["results"];
        this.data.forEach(character => {
          this.names.push(character.name);
          this.isLoading = false;
        });
      }
    });
  }

  onPlanetsClicked() {
    this.clearList();

    this.http.get(this.apiUrl + 'planets')
    .subscribe((data: any[]) => {
      if (data != null) {
        this.data = data["results"];
        this.data.forEach(planet => {
          this.names.push(planet.name);
          this.isLoading = false;
        });
      }      
    });
  } 

  clearList() {
    this.names = Array<string>();
    this.isLoading = true;
  }
}
