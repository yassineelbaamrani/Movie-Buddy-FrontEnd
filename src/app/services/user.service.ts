import { awsUrl } from './../../environments/environment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
// we must import HttpClientModule in the app.module.ts
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";


const url = `${awsUrl}/users`;

// we will inject this service into the components that call its methods
// within their methods
@Injectable({ // Services in Angular are singlton object 
  providedIn: 'root'
})
export class UserService { // this service is only responsible for one thing: making HTTP requests to a server

  // we need to inject this service with HttpClient
  constructor(private http: HttpClient) { }

  // we need to append Headers to all requests
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // POST
  public registerUser(user: User): Observable<User> {

    // from http://localhost:4200 -> http://localhost:5000/api/users/add OR http://api-env.eba-udukpxjr.us-east-2.elasticbeanstalk.com/api/users/add
    // my Spring controller accepts post requests at http://api-env.eba-udukpxjr.us-east-2.elasticbeanstalk.com/api/users/add
    return this.http.post<User>(`${url}/add`, user, this.httpOptions) // url, user, this.httpOptions
      .pipe( // we are calling a method on the data returned in the observable
        catchError(this.handleError) // passing a callback
      )
  }

  // GET
  public findAllUsers(): Observable<User[]> {  // An Observable  is a stream of values that wil be returned at over
    // send a get request and return a collection of User objects
    return this.http.get<User[]>(url) // by default a fetch request is asynchronous
      .pipe(
        catchError(this.handleError) // in our component, we subscribe to the observable that htis returns
      )
  }

  // GET -> pass a Path Variable as parameter
  public findById(id: number): Observable<User> { // http header, status code, http response body

    return this.http.get<User>(`${url}/${id}`) // http://---host---:5000/api/users/{id}
      .pipe(
        catchError(this.handleError)
      )
  }

  // GET - with path variable (this is like the findById() method above, but we've added /find as an addition to the endpoint)
  // Why do we add the extra /find to the url? 
  // If both methods hit the same @GetMapping in our Spring controller, then we would have an ambiguous handler conflict.
  public findByUsername(username: string): Observable<User> {

    return this.http.get<User>(`${url}/find/${username}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  // DELETE
  deleteUser(id: number) {
    let deleteUrl = `${url}/${id}`
    this.http.request('delete', deleteUrl).subscribe(console.log);
    // note the slightly different format for the DELETE function
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