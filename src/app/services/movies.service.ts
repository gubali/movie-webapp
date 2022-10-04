import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=8c247ea0b4b56ed2ff7d41c9a833aa77');
  }
}
