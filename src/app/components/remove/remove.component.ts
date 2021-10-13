import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ClientMessage } from './../../models/client-message';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent {

  title = "Remove User"
  userId: number = 0;
  clientMessage = new ClientMessage('');


  constructor(private userService: UserService) { }

  public removeUser() {

    this.userService.deleteUser(this.userId);

    // set client message to appear below upon successful removal
    this.clientMessage.message = `Removed user with id ${this.userId}`

  }
}
