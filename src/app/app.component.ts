import { Component } from '@angular/core';
import {
  Auth,
  AuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-angular';
  auth: Auth;
  provider: AuthProvider;
  constructor() {
    this.auth = getAuth();
    this.provider = new GoogleAuthProvider();
  }

  signInClicked(): void {
    signInWithRedirect(this.auth, this.provider);
    console.log(this.auth);
    this.auth.onAuthStateChanged((user: any) => {
      this.auth.currentUser;
    });
  }

  signOutClicked(): void {
    this.auth.signOut();
  }
} //end export
