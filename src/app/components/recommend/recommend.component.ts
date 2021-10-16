import { Movie } from 'src/app/models/movie';
import { MovieService } from './../../services/movie.service';
import { ClientMessage } from './../../models/client-message';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})

export class RecommendComponent implements OnInit {
  user_id:number = JSON.parse(localStorage.getItem("user-id")||'{}');
  constructor(
    
    private router: Router, 
    private movieService: MovieService) { }
  public movies: Movie[] = [];
  movie = new Movie(155, '', '', '', 0, '', '')
  public clientMessage = new ClientMessage('');


  ngOnInit(): void {
    const movieIdPromise = new Promise((resolve,reject) => {
      resolve(this.findMovieRecommendations())
    })
    movieIdPromise.then(()=>this.findMovieId())
    console.log(this.movie.tmdb_id)
  }
  

  public findMovieRecommendations() {
    // call the userService http method'
    this.movieService.recommendMovieList(this.movie.tmdb_id)
      .subscribe(
        data => this.movies = data
      )
    // capture the User object, subscribe to it and set our User property
  }
  public findMovieId() {
    this.movieService.recommendMovieId(this.user_id)
    .subscribe(
      data => this.movie = data
      )
  }


  public goToMain() {


    this.router.navigate(['/main']);
  }
}
