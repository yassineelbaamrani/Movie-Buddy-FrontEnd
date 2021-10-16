import { Movie } from 'src/app/models/movie';
import { MovieService } from './../../services/movie.service';
import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  title = ""
  tmdb_id = ""
  public movies: Movie[] = [];
  movie = new Movie(0,'','','',0,'','')
  public clientMessage: ClientMessage = new ClientMessage('Sorry, no movies to display...');

  // inject MovieService into this class
  constructor(private movieService: MovieService) { }

  public findMovieByTitle() {

    // call the userService http method'
    this.movieService.findByTitle(this.title)
      .subscribe(
        data=>this.movies = data
      )
      // capture the User object, subscribe to it and set our User property
    console.log(this.movies)
  }

  public addMovie() {
    this.movieService.addMovie(this.tmdb_id)
  }

}