import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { from, tap } from 'rxjs';
import { User, Roles, FireUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: FireUser | undefined;
  private _currentUser: any;
  role = Roles.Doctor;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
    this.afAuth.authState.subscribe((user) => {
      this._currentUser = user;
    });
  }

  get currentUser() {
    return this._currentUser;
  }

  get currentUserState() {
    return this.afAuth.authState;
  }

  get isLoggedIn() {
    return this.afAuth.currentUser;
  }

  SignIn(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  SignUp(email: string, password: string, data: User) {
    return from(
      this.afAuth.createUserWithEmailAndPassword(email, password)
    ).pipe(
      tap((users) => {
        users.user?.updateProfile({
          displayName: JSON.stringify(data),
        });
      })
    );
  }

  SignOut() {
    return from(this.afAuth.signOut()).pipe(
      tap(() => this.router.navigate(['']))
    );
  }
}
