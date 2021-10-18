import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buddy',
  templateUrl: './buddy.component.html',
  styleUrls: ['./buddy.component.css']
})
export class BuddyComponent implements OnInit {

 //constructor(private buddyResource: BuddyResource, private router: Router) { }
 //constructor() {}

  ngOnInit(): void {
  }

  public goToMain() {


    //this.router.navigate(['/main']);
  }

}
