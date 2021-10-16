import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})

export class RecommendComponent implements OnInit {
  user_id= localStorage.getItem("user-id");
  
  constructor() { }

  ngOnInit(): void {
    console.log("user id "+this.user_id);
    
  }

}
