import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { RegisterComponent } from './register/register.component';
import { GuardService } from './auth/guard.service';
import { LoginComponent } from './login/login.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { NewPostComponent } from './post/new-post/new-post.component';



const routes: Routes = [
  //{ path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '', component: DashboardComponent, canActivate: [GuardService]},  
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: 'login' },  
  { path: 'user/:id', component: UserDetailComponent },   
  { path: 'posts/:id', component: PostDetailComponent },  
  { path: 'users', component: UserComponent, canActivate: [GuardService] },
  { path: 'newpost', component: NewPostComponent },  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

} 