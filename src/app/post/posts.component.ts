import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Post } from './posts';
import { PostsService } from './posts.service';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { CommentsService } from '../comments/comments.service';
import { Comment } from '../comments/comment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  users: User[];
  comments: Comment[];
  userdata = JSON.parse(localStorage.getItem('loggedIn')); 
  data = { id: this.userdata.id, name: this.userdata.name, admin: this.userdata.admin }
  
  constructor(private postService: PostsService, 
  private userService: UserService,
  private commentService: CommentsService) { }

  ngOnInit() { this.getPosts(); this.getUsers(); this.getComments();
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => this.users = users);
  }

  getPosts(): void {
    this.postService.getPosts()
        .subscribe(posts => this.posts = posts);
  }

  getComments(): void {
      this.commentService.getComments()
        .subscribe(comments => this.comments = comments)
  }

  deletePost(post: Post): void {
    this.posts = this.posts.filter(h => h !== post);
    for(let comment of this.comments) 
    { 
      if(comment.postid === post.id) {
          this.commentService.deleteComment(comment)
            .subscribe()
      }
    }    
    this.postService.deletePost(post)
      .subscribe();
  }

}