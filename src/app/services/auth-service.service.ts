import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SettingService } from './setting.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  selectedUser = new User();

  public username:BehaviorSubject<string> = new BehaviorSubject('');
  public user_id:BehaviorSubject<string> = new BehaviorSubject('');
  public email:BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http:HttpClient,private setting:SettingService, private router:Router) { }

  login(identifier,password){

    this.http.post<any>(this.setting.REST_ENDPOINT+"/auth/local",{identifier:identifier,password:password}).subscribe(
      res=>{
         
         localStorage.setItem('token',res['jwt']);
         this.selectedUser = res['user'];

         this.username.next(this.selectedUser.username);
         this.email.next(this.selectedUser.email);
         this.user_id.next(this.selectedUser.id);
         localStorage.setItem('user',JSON.stringify(this.selectedUser));
         this.router.navigate(['home']);

      },error=>{
          alert(error.message[0].message[0]);
      }
    )
  }

  initialiseSelectedUser(){
    if(localStorage.getItem('user')){
      this.selectedUser = JSON.parse(localStorage.getItem('user'));

      this.username.next(this.selectedUser.username);
      this.email.next(this.selectedUser.email);
      this.user_id.next(this.selectedUser.id);
    }
  }

  signUp(){
      this.http.post<any>(this.setting.REST_ENDPOINT+"/auth/local/register",this.selectedUser).subscribe(
        res=>{
          localStorage.setItem('token',res['jwt']);
          this.selectedUser = res['user'];

          this.username.next(this.selectedUser.username);
          this.email.next(this.selectedUser.email);
          this.user_id.next(this.selectedUser.id);
          localStorage.setItem('user',JSON.stringify(this.selectedUser));
          this.router.navigate(['home']);
        },error=>{
          alert('OOps,something went wrong!');
        }
      )
  }

  logout(){

    this.username= new BehaviorSubject('');
    this.user_id= new BehaviorSubject('');
    this.email = new BehaviorSubject('');
    localStorage.clear();
  }

}
