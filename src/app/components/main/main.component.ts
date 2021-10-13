import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'MovieBuddy';
  image = 'assets/moviepng.png'

  constructor(private router: Router) { }

  // Angular lifecycle hook
  ngOnInit(): void { }

  // we can provide special functionality here that will be called when the compoenent 
  public gotoRegister() {
    this.router.navigate(['/register']);

  }
  public gotoAll() {
    this.router.navigate(['/all']);

  }
  public gotoFindUser() {
    this.router.navigate(['/find']);

  }
  public gotoRemoveUser() {
    this.router.navigate(['/remove']);

  }

}


