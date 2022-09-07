import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAPostComponent } from './pages/create-a-post/create-a-post.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { MyPostsComponent } from './pages/my-posts/my-posts.component';

import { RegisterComponent } from './pages/register/register.component';
import { LandingGuard } from './shared/landing.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'create',
        component: CreateAPostComponent,
        canActivate: [LandingGuard],
      },
      {
        path: 'my-posts',
        component: MyPostsComponent,
        canActivate: [LandingGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
