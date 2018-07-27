import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { Login } from '../../shared/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logForm: FormGroup;
  email = '';
  password = '';
  myDatas: any;
  tokenToStore =  { 'userToken': ''};

  constructor( private fb: FormBuilder, private apiservice: ApiService ) {
    this.logForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
   }

  ngOnInit() {
    this.apiservice.isLogged();
    this.apiservice.getDatas$().subscribe(data => this.myDatas =  data);
   }

  onSubmit(form: Login): void {

    this.apiservice.login$(form.email, form.password).subscribe(res => {
      localStorage.setItem('toktok', res['token']);
      this.apiservice.logged = true;
    });
  }

  hello(): void {
    console.log('hi there');
  }
}
