import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { ClientMessage } from './../../models/client-message';
import { User } from './../../models/user';

const LOGIN_API = 'http://localhost:5000/api/users/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login User';
  
  public clientMessage = new ClientMessage('');
  public user = new User(0,'', '', '', '', '', [])

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public login() {

    this.userService.login(this.user.username, this.user.password)
      .subscribe(
        data => this.clientMessage.message = `Successfully registered ${data.firstName}`,   // console.log(`successfully added ${data.firstName}`)
        error => this.clientMessage.message = `Something went wrong. Error: ${error}` // console.error(`We got an error: ${error}` 
      )


  }

}
