import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  datas = { username: '', password: '' };

  constructor(private router: Router, private authService: AuthService) {  }
  logins() {
    this.authService.login(this.datas.username, this.datas.password);
  }
  ngOnInit() { localStorage.clear() }  
}