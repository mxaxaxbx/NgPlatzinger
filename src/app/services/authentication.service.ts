import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  loginWithEmail(email: string, pwd: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, pwd);
  }

  registerWithEmail(email: string, pwd: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, pwd);
  }

  getStatus () {
    return this.angularFireAuth.authState;
  }

  logout () {
    return this.angularFireAuth.signOut();
  }


}
