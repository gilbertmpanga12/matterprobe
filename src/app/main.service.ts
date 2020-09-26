import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  isSignIn: boolean = true;
  isSignUp: boolean = false;
  isPasswordForgot: boolean = false;

  constructor() { }

   setSignIn(): void{
    this.isSignIn = true;
    this.isSignUp = false;
    this.isPasswordForgot = false;
  }

  setSignUp(): void {
    this.isSignUp = true;
    this.isSignIn = false;
    this.isPasswordForgot = false;
  }

  setPassword(): void{
    this.isPasswordForgot = true;
    this.isSignIn = false;
    this.isSignUp = false;
  }


}
