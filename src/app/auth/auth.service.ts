import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs/Observable';



@Injectable()
  export class AuthService {
    users: User[];
    constructor(private router: Router, private userService: UserService) { 
        this.userService.getUsers()
            .subscribe(users => this.users = users)
    }

    login(username: string, password: string) {
        for(let user of this.users)
        {
            if (username === user.name && password === user.pass) 
            { 
                this.router.navigate(['']);
                localStorage.setItem('loggedIn', JSON.stringify({ id: user.id, username: user.name, admin: user.admin }));  
                var useri = JSON.parse(localStorage.getItem('loggedIn')); 
                console.log('token:', useri);             
            }
       }
       return;
    }

    loggedIn() {        
        var token = JSON.parse(localStorage.getItem('loggedIn')); 
        if(token)
        {
            return true;
        } else { return false; }
    }

    logOut() { console.log('izlogovo');
        return localStorage.removeItem('loggedIn');  
    }
}