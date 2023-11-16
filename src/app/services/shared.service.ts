import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl='https://localhost:7041/api';
  constructor(private http:HttpClient) { }

  layDSCongViec():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/Task');
  }
  themCongViec(val:any){
    return this.http.post(this.ApiUrl+'/Task',val);
  }
  suaCongViec(id:any, val:any){
    return this.http.put(this.ApiUrl+ '/Task/' + id ,val);
  }
  xoaCongViec(val:any){
    return this.http.delete(this.ApiUrl+'/Task'+val);
  }

  layDSDanhMuc():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/Tag');
  }
  themDanhMuc(val:any){
    return this.http.post(this.ApiUrl+'/Tag',val);
  }
  suaDanhMuc(id:any, val:any){
    return this.http.put(this.ApiUrl+ '/Tag/' + id ,val);
  }
  xoaDanhMuc(TagID: number){
    const url = `${this.ApiUrl}/Tag/${TagID}`;
    return this.http.delete(url);
  }
  layDSTenDanhMuc():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/Tag/GetAllTagName');
  }

  layDSUser():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/User');
  }
}
