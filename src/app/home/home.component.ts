import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { SharedService } from '../services/shared.service';
import { AuthService } from '../services/auth.service';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public users:any=[];
public role!: string 
public userName: string=" ";

  constructor(private service:SharedService, private auth:AuthService, private userStore:UserStoreService) {}

  ngOnInit() {
    this.service.layDSUser().subscribe(res=>{
      this.users = res
    });
    this.userStore.getUsernameFromStore().subscribe(val => {
      const userNameFromToken = this.auth.getUsernameFromToken();
      this.userName = val || userNameFromToken
    });

    this.userStore.getRoleFromStore().subscribe(val =>{
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken
    })
  }
  logout(){
    this.auth.signOut();
  }


}
