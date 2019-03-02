import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user/user';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Post } from '../../post/posts';
import { PostsService } from '../../post/posts.service';
import { DatePipe } from '@angular/common';

import { UserService }  from '../../user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private postService: PostsService,
    private datePipe: DatePipe) {}
  
  adm = JSON.parse(localStorage.getItem('loggedIn'));
  posts: Post[];
  Url = this.router.url;

  ngOnInit(): void {
    console.log(this.datePipe.transform(new Date(), 'dd-MM-yy'));
    this.getUser(); this.getPosts();
  }

  getPosts(): void { 
    this.postService.getPosts() 
    .subscribe(posts => this.posts = posts);
  }
  
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  saveUser(): void {
    this.userService.updateUser(this.user)
      .subscribe()
  }

  deleteUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.deleteUser(id)
      .subscribe();  
  }

  getAuth() {
    if(this.adm.admin === true || this.adm.username === this.user.name) { return true; }
  }

  adminView() {
    if(this.adm.admin === true && this.Url === '/users') {
    return false;
    } else { return true }
  }
}
