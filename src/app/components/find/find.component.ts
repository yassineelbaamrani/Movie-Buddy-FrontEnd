import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  title = "Find User"
  userId: number = 0; // initialize to zero, then it will be updated 
  username: string = '';
  user = new User(0, '', '', '', '', '', [])

  // inject UserService into this class
  constructor(private userService: UserService) { }

  public findUserByUsername() {

    // call the userService http method'
    this.userService.findByUsername(this.username)
      .subscribe(data => this.user = data)

      // capture the User object, subscribe to it and set our User property

  }

}
