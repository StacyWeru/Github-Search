import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { User } from './../user';
import { Repository } from './../repository';

import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InfoService {
 
  private username:string;
  User:User;
  repo: Repository ;

 constructor(private http:HttpClient) {
   this.User = new User("","","","","",0,0,0,new Date());
   this.repo = new Repository("","","");
   this.username = '';
   }
   UserRequest(){
              interface ApiResponse{
                avatar_url:string;
                 name:string;
                 url:string;
                 bio:string;
                 location:string;
                 public_repos:number;
                 followers:number;
                 following:number;
                 created_at:Date
              }

             let promise = new Promise((resolve,reject)=>{
               this.http.get<ApiResponse>(environment.apiUrl+this.username+environment.apiKey).toPromise().then(response=>{
                 this.User.avatar_url=response.avatar_url
                 this.User.name=response.name
                 this.User.url=response.url
                 this.User.bio=response.bio
                 this.User.location=response.location
                 this.User.public_repos=response.public_repos
                 this.User.followers=response.followers
                 this.User.following=response.following
                 this.User.created_at=response.created_at

               resolve()
                },
                error =>{
                  this.User.name = "-Error - Unable to get user"
                  reject(error)
                }
              )
            })
                return promise
              }

     repoRequest(){
           interface ApiResponse{
                name:string;
                 description:string;
                 html_url:string;

                }

             let promise = new Promise((resolve,reject)=>{
               this.http.get<ApiResponse>(environment.apiUrl+ this.username + environment.apiRepos).toPromise().then(response=>{
                 this.repo.name=response.name
                 this.repo.description=response.description
                 this.repo.html_url=response.html_url

               resolve()
                },
                error =>{
                  this.repo.name = "Error - Unable to get Repo"
                  reject(error)
                }
              )
            })
                return promise

            }
            updateUser(username:string){
              this.username =username;
            }

       }