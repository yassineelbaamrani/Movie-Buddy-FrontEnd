import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})

export class RecommendComponent implements OnInit {
  user_id = localStorage.getItem("user-id");
  constructor( private router:Router) { }
  ngOnInit(): void {
    function renderHTML(data: any) {
      for (var i = 0; i < data.results.length; i++) {
        var imag = new Image();
        let imgString = "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path;
        imag.src = imgString;
        imag.setAttribute("height", '300');


        //this.title.appendChild(imag);

        // movieTitle.innerHTML += "<br />" + "ID: " + data.results[i].id + "<br />" + "Title: " + data.results[i].original_title + "<br />"
        //     + "Synopsis: " + data.results[i].overview + "<br />" + "<br />";

        var btnn = document.createElement('button');
        btnn.innerHTML = "Add to my List!";
        // document.getElementById('title').appendChild(btnn);

        // movieTitle.innerHTML += "<hr />" + "<br />";
      }
    }


  }

  public goToMain() {


    this.router.navigate(['/main']);
  }
}
