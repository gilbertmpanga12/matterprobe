import { Injectable } from '@angular/core';
// import { auth } from 'firebase/app';
// import { firestore as ft } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  isSignIn: boolean = true;
  isSignUp: boolean = false;
  isPasswordForgot: boolean = false;
  isSpinning: boolean = true;

  user: User;
  isLoading: boolean = false;
  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) {
    this.auth.authState.subscribe(user => {
      this.isSpinning = false;
      if (user){
        this.user = user;
        localStorage.setItem('userId',user.uid);
      }
    }, err => {
      this.isSpinning = false;
    });
  }

   setSignIn(): void {
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

  async login(email: string, password: string){
   try{
        this.isLoading = true;
    await this.auth.signInWithEmailAndPassword(email,password);
    this.isLoading = false;
   }catch(e){
     this.isLoading = false;
     alert(e);
   }
  }

  async registerAccount(payload: {name:string,password:string,email: string}){
   try{
    this.isLoading = true;
    let user =  await this.auth.createUserWithEmailAndPassword(payload.email,payload.password);
    user.user.updateProfile({displayName: payload.name});
    this.resendEmailLink();
    this.isLoading = false;
    await this.firestore.collection('users_matterprobe').doc(user.user.uid) // <Student>
    .set({
    name: payload.name,
    email: payload.email,
    uid: user.user.uid,
    created_at: Date.now()
    });
   }catch(e){
    this.isLoading = false;
    alert(e);
   }
  }

  async resendEmailLink(){
   try{
    await (await this.auth.currentUser).sendEmailVerification();
   }catch(e){
    alert(e);
   }
  }

  async forgotPassword(email: string){
   try{
     this.isLoading = true;
    await this.auth.sendPasswordResetEmail(email);
    this.isLoading = false;
   }catch(e){
    this.isLoading = false;
    alert(e);
   }
  }


  async syncUrls(url: string){
    let user = await this.auth.currentUser;
    await this.firestore.collection('browse_history').doc(user.uid) // <Student>
   .set({
   url: url,
   created_at: Date.now(),
   uid: user.uid,
   name: user.displayName
   });
  }

  isLoggedIn(){
    return this.auth.authState;
  }



}
