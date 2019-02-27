import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { BookCreateComponent } from './component/book/book-create/book-create.component';
import { BookUpdateComponent } from './component/book/book-update/book-update.component';
import { BookComponent } from './component/book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorComponent } from './component/author/author.component';
import { AuthorCreateComponent } from './component/author/author-create/author-create.component';
import { AuthorDetailsComponent } from './component/author/author-details/author-details.component';
import { AccountListComponent } from './component/account/account-list/account-list.component';
import { TokenInterceptor } from './service/interceptor/token.interceptor';
import { ProfileUpdateComponent } from './component/profile/profile-update/profile-update.component';
import { BookDetailsComponent } from './component/book/book-details/book-details.component';
import { ProfileShowComponent } from './component/profile/profile-show/profile-show.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AccountCreateComponent } from './component/account/account-create/account-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    BookComponent,
    BookCreateComponent,
    BookUpdateComponent,
    AuthorComponent,
    AuthorCreateComponent,
    AuthorDetailsComponent,
    AccountListComponent,
    ProfileUpdateComponent,
    BookDetailsComponent,
    ProfileShowComponent,
    LogoutComponent,
    AccountCreateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
