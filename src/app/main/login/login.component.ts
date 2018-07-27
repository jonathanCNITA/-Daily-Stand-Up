import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logForm: FormGroup;
  email = '';
  password = '';


  constructor( private fb: FormBuilder ) {
    this.logForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
   }

  ngOnInit() { }

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }

  hello(): void {
    console.log('hi there');
  }
}
