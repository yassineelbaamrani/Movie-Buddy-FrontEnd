import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user_id = localStorage.getItem("user-id");
  title = 'MovieBuddy';
  image = 'assets/moviepng.png'

  constructor(private router: Router) { }

  // Angular lifecycle hook
  ngOnInit(): void {
    
    console.log(this.user_id)
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

}


