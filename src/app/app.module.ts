import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { InfoService } from '../app/info-service/info.service';

import{ UsersComponent} from './../app/users/users.component';
import { RepositoryComponent } from './repository/repository.component';
import { JoinDateCountPipe } from './join-date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
    HomeComponent,
    UsersComponent,
    RepositoryComponent,
    JoinDateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 