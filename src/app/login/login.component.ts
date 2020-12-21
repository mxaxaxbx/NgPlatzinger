import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  operation: string = 'login';

  email: string = '';
  pwd: string = '';
  nick: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login () {
    this.authenticationService.loginWithEmail(this.email, this.pwd).then((data) => {
      this.router.navigate(['home']);
      
    }).catch((err) => {
      alert('error');
      console.log(err);
    })
  }

  register () {
    this.authenticationService.registerWithEmail(this.email, this.pwd).then((data) => {
      const user = {
        uid: data.user.uid,
        email: this.email,
        nick: this.nick,
      };
      
      this.userService.createUser(user).then((userData) => {
        console.log('registrado');
        console.log(userData);
      }).catch((err) => {
        console.log('error');
        console.log(err);
        
      });
      
    }).catch((err) => {
      alert('error');
      console.log(err);
    })
  }

}
