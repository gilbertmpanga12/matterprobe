import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  passwordForgetGroup: FormGroup;
  constructor(private _fb: FormBuilder, public service: MainService) { }

  ngOnInit(): void {
    this.passwordForgetGroup = this._fb.group({
      email: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  forgotPassword(): void{
    let valid = this.passwordForgetGroup.invalid;
    if(valid){
      alert('Please fill in your email to reset password');
      return;
    }
    let payload = this.passwordForgetGroup.getRawValue();
    this.service.forgotPassword(payload['email']);
  }

}
