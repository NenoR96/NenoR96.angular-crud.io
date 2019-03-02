import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users: User[];
 
  constructor(private userService: UserService) { }

  ngOnInit() { this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => this.users = users);
  }

  add(name: string, email: string): void {
    name = name.trim();
    email = email.trim();
    if (!name) { return; }
    this.userService.addUser({ name, email } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }  

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe(user => this.activeUser = user);
  }

  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }
}
