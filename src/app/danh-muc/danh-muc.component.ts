import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { AuthService } from '../services/auth.service';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.component.html',
  styleUrls: ['./danh-muc.component.css']
})
export class DanhMucComponent {
  Role!: string;
  constructor(private service:SharedService, private auth:AuthService, private userStore:UserStoreService) {}

  ngOnInit() {
    this.userStore.getRoleFromStore().subscribe(val =>{
      const roleFromToken = this.auth.getRoleFromToken();
      this.Role = val || roleFromToken
    })
  }
}
