import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFirestore: AngularFirestore) {
  }

  getUsers() {
    return this.angularFirestore.collection('users');
  }

  getUserById(uid: string) {
    return this.angularFirestore.collection('users').doc(uid);
  }

  createUser(user) {
    return this.angularFirestore.collection('users').doc(user.uid).set(user);
  }

  editUser(user) {
    return this.angularFirestore.collection('users').doc(user.uid).update(user);
  }

}
