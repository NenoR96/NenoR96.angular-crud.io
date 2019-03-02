import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserService } from './user/user.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService} from './auth/auth.service';
import { GuardService } from './auth/guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './post/posts.component';
import { PostsService } from './post/posts.service';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { NewPostComponent } from './post/new-post/new-post.component';
import { DatePipe } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './comments/comments.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    PostsComponent,
    PostDetailComponent,
    NewPostComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule, FormsModule, 
    AppRoutingModule, HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [UserService, AuthService, GuardService, PostsService, CommentsService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
