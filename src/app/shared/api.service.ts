import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '../../../node_modules/@angular/compiler/src/output/abstract_emitter';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  configUrl = 'https://daily-standup-campus.herokuapp.com/api/';
  datas = [];
  logged = false;

  // tslint:disable-next-line:max-line-length
  configUrlMaster = 'https://daily-standup-campus.herokuapp.com/api/projects?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg';
  userLogin = '';
  httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + this.userLogin
    })
  };


  constructor( private http: HttpClient) { }

  getDatas$() {
    return this.http.get(this.configUrlMaster);
  }

  deleteProject(id: string) {
    return this.http.delete(this.configUrl + 'projects/' + id, this.getUserHeader());
  }

  login$( mail: string, password: string ) {
    return this.http.post(this.configUrl + 'auth', { mail, password }, this.setHttpOptions(mail, password));
  }

  setHttpOptions(mail, pass) {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(mail + ':' + pass)
      })
    };
  }

  getUserHeader() {
    return  {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.getToken()
      })
    };
  }

  isLogged() {
    this.logged = this.getToken() ? true : false;
  }

  getToken() {
    return localStorage.getItem('toktok');
  }
}
