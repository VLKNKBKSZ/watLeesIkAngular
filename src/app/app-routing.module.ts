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
import {BookListComponent} from './component/book/book-list/book-list.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import {BookListItemEditComponent} from './component/book/book-list/book-list-item-edit/book-list-item-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password/:token', component: ResetPasswordComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'book', component: BookComponent},
  {path: 'book/:isbn', component: BookDetailsComponent },
  {path: 'book-list/book-list-item-edit', component: BookListItemEditComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'account/account-list', component: AccountListComponent},
  {path: 'account/account-create', component: AccountCreateComponent},
  {path: 'profile/profile-update', component: ProfileUpdateComponent},
  {path: 'profile/profile-show', component: ProfileShowComponent},
  {path: 'profile/book-list', component: BookListComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
