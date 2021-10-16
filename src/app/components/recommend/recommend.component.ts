import { Movie } from 'src/app/models/movie';
import { MovieService } from './../../services/movie.service';

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
  movie = new Movie(0, '', '', '', 0, '', '')
  movie_id = 155
  ngOnInit(): void {
    const movieIdPromise = new Promise((resolve,reject) => {
      resolve(this.findMovieId())
    })
    movieIdPromise.then(()=>this.findMovieRecommendations())
    console.log(this.movie_id)
  }
  public findMovieId() {
    this.movieService.recommendMovieId(this.user_id).subscribe(data => console.log(data))
  }

  public findMovieRecommendations() {
    // call the userService http method'
    this.movieService.recommendMovieList(this.movie_id)
      .subscribe(
        data => this.movies = data
      )
    // capture the User object, subscribe to it and set our User property
  }


  public goToMain() {


    this.router.navigate(['/main']);
  }
}
