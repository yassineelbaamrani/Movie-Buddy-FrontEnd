import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user_id = localStorage.getItem("user-id") || '{}';
  user_id_num: number = +this.user_id;
  title = 'MovieBuddy';
  image = 'https://www.nicepng.com/png/full/33-336008_movie-camera-png-old-video-camera-png.png'

  constructor(
    private router: Router,
    private movieService: MovieService) { }
  public movies: Movie[] = [];
  movie = new Movie(155, '', '', '', 0, '', '')

  // Angular lifecycle hook
  ngOnInit(): void {
    this.movieList();
    console.log(this.movies)
  }


  // we can provide special functionality here that will be called when the compoenent 
  public gotoRegister() {
    this.router.navigate(['/register']);

  }
  public gotoAll() {
    this.router.navigate(['/all']);

  }
  public gotoAdd() {
    this.router.navigate(['/find']);

  }
  public gotoRemoveUser() {
    this.router.navigate(['/remove']);

  }
  public gotoLogin() {
    this.router.navigate(['/login']);

  }
  public gotoRecommend() {
    this.router.navigate(['/recommend']);

  }
  public movieList() {
    this.movieService.movieList(this.user_id_num)
      .subscribe(
        data=> this.movies=data)
  }

}


