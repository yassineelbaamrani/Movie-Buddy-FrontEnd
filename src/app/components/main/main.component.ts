import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'User Portal'; 
  image = 'assets/network.png'

  constructor() { }

  // Angular lifecycle hook
  ngOnInit(): void {

    // we can provide special functionality here that will be called when the compoenent 
  }

}
