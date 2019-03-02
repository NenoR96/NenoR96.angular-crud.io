import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from './comment';
import { CommentsService } from './comments.service';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { PostsService } from '../post/posts.service';
import { Post } from '../post/posts';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  users: User[];
  posts: Post[];
  
  constructor(private commentService: CommentsService, 
  private route: ActivatedRoute,
  private userService: UserService,
  private postService: PostsService) { }

  ngOnInit() { this.getComments(); this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users)
  }

  getComments(): void {
    this.commentService.getComments()
      .subscribe(comments => this.comments = comments)
  }
  /*getUser(): void {
    var id = this.comment.user;
    this.userService.getUser(id)
      .subscribe(user => this.user = user)
  }*/

}
