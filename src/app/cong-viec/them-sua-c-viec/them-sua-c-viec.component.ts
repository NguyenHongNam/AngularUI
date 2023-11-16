import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-them-sua-c-viec',
  templateUrl: './them-sua-c-viec.component.html',
  styleUrls: ['./them-sua-c-viec.component.css']
})
export class ThemSuaCViecComponent implements OnInit {
  tenCongViec:any;
  moTaCongViec: any;
  @Input()cViec:any;
  @Output() taiLaidanhsach = new EventEmitter<any>();
  maCongViec:any;
  DSCongViec:any=[];
  danhMuc:any;
  dsTendanhmuc:any=[];
  constructor(private service:SharedService){ }
  ngOnInit():void{
    this.service.layDSTenDanhMuc().subscribe(data =>{
      this.dsTendanhmuc = data;
    });
  }
  loadCongViec(){
    this.service.layDSCongViec().subscribe((data)=>{
      this.DSCongViec = data;
    })
  }
  themCongViec(){
      var val = {
        Title: this.tenCongViec,
        Description: this.moTaCongViec,
        TagName: this.danhMuc,
      };
      this.service.themCongViec(val).subscribe((res) => {
        alert(res.toString());
        this.loadCongViec();
      });
  } 
  suaCongViec(){
    var val = {
      TaskID:this.maCongViec,
      Title: this.tenCongViec,
      Description: this.moTaCongViec,
      TagName: this.danhMuc,
    };
    this.service.suaCongViec(this.maCongViec ,val).subscribe((res) =>{
      this.loadCongViec();
      alert(res.toString());
    })
    };
}
