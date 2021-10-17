import { Movie } from 'src/app/models/movie';
import { MovieService } from './../../services/movie.service';
import { ClientMessage } from './../../models/client-message';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  user_id:number = JSON.parse(localStorage.getItem("user-id")||'{}');
  title = ""
  tmdb_id = ""
  public movies: Movie[] = [];
  movie = new Movie(0,'','','',0,'','')
  public clientMessage: ClientMessage = new ClientMessage('');

  // inject MovieService into this class
  constructor(private movieService: MovieService, private router: Router) { }

  public findMovieByTitle() {

    // call the userService http method'
    this.movieService.findByTitle(this.title)
      .subscribe(
        data=>this.movies = data
      )
      // capture the User object, subscribe to it and set our User property
    console.log(this.movies)
    this.title = '';
  }

  public addMovie() {
    this.clientMessage.message = '';
    this.movieService.addMovie(this.tmdb_id, this.user_id) // plus uid
    .subscribe(
      data => { if (data == true) {
        this.clientMessage.message = 'Movie successfully added to list!';
      }
      })
    this.tmdb_id = '';
  }

  public goToMain() {
    this.router.navigate(['/main']);
  }

}