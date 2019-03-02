import { Component, OnInit } from '@angular/core';
import { Post } from '../posts';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';
import { CommentsService } from '../../comments/comments.service';
import { Comment } from '../../comments/comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;
  users: User[];
  data: string;
  comments: Comment[];
  tempUser = JSON.parse(localStorage.getItem('loggedIn')); 
  constructor(private postService: PostsService, 
    private route: ActivatedRoute, 
    private userService: UserService,
    private commentService: CommentsService) { }
 
    ngOnInit() {
    this.getPost(); this.getUser(); this.getComments();
  }

  getUser(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users)
  }
  

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(post => this.post = post);
  }


  getComments(): void {
    this.commentService.getComments()
      .subscribe(comments => this.comments = comments);
  }

  addComment(postid: number, comment: string, user: number): void {
    this.commentService.addComment({ postid, comment, user } as Comment)
      .subscribe(comment => {
        this.comments.unshift(comment);
      });
  }  

  onComment() {
    this.addComment(this.post.id, this.data, this.tempUser.id);
    this.post.comments = this.post.comments+1; 
    this.postService.updatePost(this.post).subscribe()
    console.log(this.post.comments); this.data = '';
  }

}


