import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MainService} from '../main.service';
import { invalid } from '@angular/compiler/src/render3/view/util';


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
    let valid = this.signInGroup.invalid;
    if(valid){
      alert('Please fill in all required fields');
      return;
    }
    let payload = this.signInGroup.getRawValue();
    this.service.login(payload['email'], payload['password']);
  }

}
