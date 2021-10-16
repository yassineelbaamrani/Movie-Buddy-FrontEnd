import { Injectable } from '@angular/core';
import { Movie } from './../models/movie';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
// we must import HttpClientModule in the app.module.ts
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

const apikey = "093c734f042b18166bbf417d9a8701e6"
const search = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&include_adult=false&query=`
const imgpath = "http://image.tmdb.org/t/p/w92"
const requestUrl = "https://api.themoviedb.org/3/movie/"
const requestUrl2 = "/recommendations?api_key=4e03597f829ab368d49ae4a8f0769033&language=en-US"

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  // GET
  public findByTitle(title: string): Observable<Movie[]> {
    console.log(`${search}${title}`)
    return this.http.get<Movie[]>(`${search}${title}`) 
    .pipe(
      catchError(this.handleError)
    )
  }
  public recommendMovieList(movie_id:number): Observable<Movie[]>{
    return this.http.get<Movie[]>(`http://localhost:5000/api/movies/recommended/${movie_id}`)
    //.pipe( catch(this.handleError)
  }
  public recommendMovieId(user_id:number):Observable<Movie>{
    return this.http.get<Movie>(`http://localhost:5000/api/movies/recommend/${user_id}`)
  }
  public movieList(user_id:number):Observable<Movie[]>{
    return this.http.get<Movie[]>(`http://localhost:5000/api/movies/list/${user_id}`)
  }


  private formatMovie(movie: any): Movie {
    return {
      tmdb_id: movie.id, title: movie.title, year: movie.release_date,
      genre: movie.genre_ids[0], rating: movie.vote_average, description: movie.overview, img: `${imgpath}${movie.poster_path}?api_key=${apikey}`
    };
  }

  // create a method called handleError which will be invoked if something goes wrong in our http requests
  private handleError(httpError: HttpErrorResponse) {

    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occured, handle it accordingly
      console.log('And error occured: ', httpError.error.message)
    } else {
      // the backend returned an unsuccessful response code
      // the reponse body might have clues for what went wrong
      console.error(`
        Backend returned code ${httpError.status}, 
        body was: ${httpError.error}
      `)
    }
    // throwError is an Observable from rxJS
    return throwError('Something bad happened; please try again later')
  }
}
