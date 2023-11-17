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
public DSUser:any=[];
tKhoan:any=[];
page: number= 1;
i: any;
thuTuSapXep: 'asc' | 'desc' = 'asc';
tuKhoaTimKiem: string = '';
trangHienTai: number = 1; 
soLuongUserTrenTrang: number = 8; 
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
    });
    this.tailaiDSUser();
  }
  onTuKhoaTimKiemChange() {
    this.timKiemUser();
  }
  logout(){
    this.auth.signOut();
  }
  tailaiDSUser(){
    this.service.layDSUser().subscribe(data =>{
      this.DSUser = data;
    });
  };
  timKiemUser() {
    if (this.tuKhoaTimKiem) {   
      this.DSUser = this.DSUser.filter((tKhoan: any) =>
      this.replaceTextSearch(tKhoan.UserName).includes(this.replaceTextSearch(this.tuKhoaTimKiem))
      );
    } else {
      this.tailaiDSUser();
    }
    this.trangHienTai = 1;
  }
  layUserTrenTrang() {
    const batDau = (this.trangHienTai - 1) * this.soLuongUserTrenTrang;
    const ketThuc = batDau + this.soLuongUserTrenTrang;
    return this.DSUser.slice(batDau, ketThuc);
  }
  replaceTextSearch(text: string){
    debugger;
    let string = text.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, m => m === 'đ' ? 'd' : 'D');
    return string;
  }
  sapXepBang(col: string) {
    // Sắp xếp mảng dựa trên cột được chọn và thứ tự sắp xếp
    this.DSUser.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => {
      if (this.thuTuSapXep === 'asc') {
        return a[col] - b[col];
      } else {
        return b[col] - a[col];
      }
    });
    this.trangHienTai = 1;
  }
}
