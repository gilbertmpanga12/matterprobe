import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  passwordForgetGroup: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.passwordForgetGroup = this._fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

}
