import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {BookComponent} from './component/book/book.component';
import {RegisterComponent} from './component/register/register.component';
import {AuthorComponent} from './component/author/author.component';
import { AccountListComponent } from './component/account/account-list/account-list.component';
import { ProfileUpdateComponent } from './component/profile/profile-update/profile-update.component';
import {BookDetailsComponent} from './component/book/book-details/book-details.component';
import { ProfileShowComponent } from './component/profile/profile-show/profile-show.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AccountCreateComponent } from './component/account/account-create/account-create.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'book', component: BookComponent},
  {path: 'book/:isbn', component: BookDetailsComponent },
  {path: 'author', component: AuthorComponent},
  {path: 'account/account-list', component: AccountListComponent},
  {path: 'account/account-create', component: AccountCreateComponent},
  {path: 'profile/profile-update', component: ProfileUpdateComponent},
  {path: 'profile/profile-show', component: ProfileShowComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
