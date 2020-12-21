import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
  }

}
