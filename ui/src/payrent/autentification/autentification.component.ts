import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'autentification',
  templateUrl: './autentification.component.html',
  styleUrls: ['./autentification.component.scss']
})
export class AutentificationComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  getEmailErrorMessage() {
    return this.form.get("email").hasError('required') ? 'Email-ul este obligatoriu de introdus.' :
           this.form.get("email").hasError('email') ? 'Format invalid de email.' :
      '';
  }
  getPasswordErrorMessage() {
    return this.form.get("password").hasError('required') ? 'Parola este obligatoriu de introdus.' :
          '';
  }

}
