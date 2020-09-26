import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MainService} from '../main.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
signInGroup: FormGroup;


  constructor(private _fb: FormBuilder, public service: MainService) { }

  ngOnInit(): void {

    this.signInGroup = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signIn(): void{
    let payload = this.signInGroup.getRawValue();
    this.service.login(payload['email'], payload['password']);
  }

}
