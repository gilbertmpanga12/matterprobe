import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpGroup: FormGroup;
  constructor(private _fb: FormBuilder, public service: MainService) { }

  ngOnInit(): void {
    
    this.signUpGroup = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  register(): void{
    let payload = this.signUpGroup.getRawValue();
    this.service.registerAccount({
      name: payload['name'],
      email: payload['email'],
      password: payload['password']
    });
  }

}
