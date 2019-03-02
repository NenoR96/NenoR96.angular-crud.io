import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Post } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  post: Post[];
  model: any = {};
  tempUser = JSON.parse(localStorage.getItem('loggedIn'));
  constructor(private postService: PostsService, private datePipe: DatePipe) { }
  date = this.datePipe.transform(new Date(), 'dd-MM-yy');
  ngOnInit() { }
  addPost(title: string, descript: string, main: string, createdAt: string): void { 
    this.postService.addPost({ title, descript, main, createdAt, user: this.tempUser.id, comments: 0 } as Post)
    .subscribe(post => {
      this.post.push(post);
    });
  }  

  publish()
  {
    this.addPost(this.model.title, this.model.descript, this.model.main, this.date);
  }
}
