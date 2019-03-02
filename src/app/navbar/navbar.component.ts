import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute) {}
  userdata = JSON.parse(localStorage.getItem('loggedIn')); 
  data = { id: this.userdata.id, name: this.userdata.name, admin: this.userdata.admin }
  
  ngOnInit() { 
    
  }
}
