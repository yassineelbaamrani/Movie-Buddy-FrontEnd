import { UserService } from './../../services/user.service';
import { ClientMessage } from './../../models/client-message';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  title = "All Users"
  public users: User[] = [];
  
  // use a structural directive to check IF we have users, and if not, then we show the client message
  public clientMessage: ClientMessage = new ClientMessage('Sorry no users to display');
  

  constructor(private userService: UserService) { }

  // WHEN this component is initialized (rendered in the root compoenent)
  // we want to popluate the array with all the users in the database
  ngOnInit(): void {

    // we will call the below method to load all User objects from the DB INTO the users[] of this component
    this.findAllUsers();
  }

  public findAllUsers() {

    this.userService.findAllUsers() // every object that is captured from the observabel is set as our users array
      .subscribe(data => this.users = data) // this defines what we do with the data returned from the observable

  }

}
