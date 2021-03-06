import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoService } from '../info-service/info.service';
import { Repository} from '../repository';

@Component({
  selector: 'app-repository',
  template: './repository.component.html',
  providers:[InfoService],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  username:string;
    repo: Repository;

  constructor(private InfoService:InfoService) {
        }
    findUser(){
    this.InfoService.updateUser(this.username);
    this.InfoService.repoRequest();
    this.repo=this.InfoService.repository
  }

  ngOnInit(): void {
  }

}
