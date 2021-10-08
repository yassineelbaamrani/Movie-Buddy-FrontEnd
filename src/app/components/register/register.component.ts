import { ClientMessage } from './../../models/client-message';
import { UserService } from './../../services/user.service';
import { User, Address } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'Register User';

  // public, private, protected
  public user = new User(0,'', '', '', '', '', [])
  public address = new Address('', '', '', '')
  public clientMessage = new ClientMessage('');

  // inject the UserService into this component
  constructor(private userService: UserService) { }

  public registerUser(): void {
  
    // push the address object captured into the User's address's []
    this.user.addresses.push(this.address);

    // call this.userService.registerUser() method and post it
    this.userService.registerUser(this.user)
      .subscribe( // subscribe to the data returned and do something like generate client message
        data => this.clientMessage.message = `Successfully registered ${data.firstName}`,   // console.log(`successfully added ${data.firstName}`)
        error => this.clientMessage.message = `Something went wrong. Error: ${error}` // console.error(`We got an error: ${error}` 
      )
  }

}
