import { User } from 'src/app/models/user';
import { FindComponent } from './../components/find/find.component';
import { awsUrl } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
// we must import HttpClientModule in the app.module.ts
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from '@angular/router';

const localURL= `http://moviebuddy-env.eba-tnrhbgxj.us-east-2.elasticbeanstalk.com/api/users`
const url = `http://moviebuddy-env.eba-tnrhbgxj.us-east-2.elasticbeanstalk.com
/api/users`;

// we will inject this service into the components that call its methods
// within their methods
@Injectable({ // Services in Angular are singlton object 
  providedIn: 'root'
})
export class UserService { // this service is only responsible for one thing: making HTTP requests to a server

  // we need to inject this service with HttpClient
  constructor(private http: HttpClient, private router: Router) { }

  // we need to append Headers to all requests
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  user = new User(0, '', '', '', '', '')

  // POST
  public registerUser(user: User): Observable<User> {

    return this.http.post<User>(`${localURL}/add/`, user) // url, user, this.httpOptions
      .pipe( // we are calling a method on the data returned in the observable
        catchError(this.handleError) // passing a callback
      )
  }

  //user find my username of example, ifstatement to compare is password inputted is equal to password associated with user found by username passed in if user doesnt exist reroute back to same page and say login failed.
  //return password to check validity make change
  public login(username: string, password: string): Observable<User> {
    return this.http.get<User>(`${localURL}/find/${username}`)
      .pipe(catchError(this.handleError));
     

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