import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info-service/info.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers:[InfoService],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User;
  username:string;

  constructor(private InfoService:InfoService) {
     }
  findUser(){
  this.InfoService.updateUser(this.username);
  this.InfoService.UserRequest()
  this.user=this.InfoService.User
  }
  ngOnInit() {}

}