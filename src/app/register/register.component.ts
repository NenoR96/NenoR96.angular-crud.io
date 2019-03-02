import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import { UserService } from '../user/user.service';
import { User } from '../user/user'
import { AuthService } from '../auth/auth.service';

 
@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html'
})
 
export class RegisterComponent {
    model: any = {};
    loading = false;
    users: User[] = [];
    
 
    constructor(
        private router: Router,
        private userService: UserService,
        ) { }
 
    add(name: string, email: string, pass: string): void {
        this.userService.addUser({ name, email, pass, avatar: 'assets/img_avatar3.jpg' } as User)
            .subscribe(user => {
            this.users.push(user); this.router.navigate(['']); localStorage.setItem('loggedIn', JSON.stringify({ id: user.id, username: user.name, admin: user.admin }));  
            error => {
                this.loading = false;
            }
        });
    }  

    register() {
        this.add(this.model.name, this.model.email, this.model.pass);
        console.log('user registeret    ' +this.model.name, this.model.email, this.model.pass);
    }
} 