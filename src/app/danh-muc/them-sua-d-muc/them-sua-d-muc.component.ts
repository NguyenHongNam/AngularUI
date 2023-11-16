import { Component,OnInit,Input,EventEmitter, Output } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-them-sua-d-muc',
  templateUrl: './them-sua-d-muc.component.html',
  styleUrls: ['./them-sua-d-muc.component.css']
})
export class ThemSuaDMucComponent {
  tenDanhMuc:any;
  @Input()dMuc:any;
  @Output() taiLaidanhsach = new EventEmitter<any>();
  maDanhMuc:any;
  DSDanhMuc:any=[];
  constructor(private service:SharedService){ }
  ngOnInit():void{
    this.maDanhMuc=this.dMuc.TagID;
    this.tenDanhMuc=this.dMuc.TagName;
    this.loadDanhMuc();
  }
  loadDanhMuc(){
    this.service.layDSDanhMuc().subscribe((data)=>{
      this.DSDanhMuc = data;
    })
  }
  themDanhMuc(){
      var val = {
        TagName: this.tenDanhMuc
      };
      this.service.themDanhMuc(val).subscribe((res) => {
        alert(res.toString());
        this.taiLaidanhsach.emit();
      });
  } 
  suaDanhMuc(){
    var val = {
      TagID:this.maDanhMuc,
      TagName: this.tenDanhMuc,
    };
    this.service.suaDanhMuc(this.maDanhMuc ,val).subscribe((res) =>{
      this.taiLaidanhsach.emit();
      alert(res.toString());  
    })
    };
  }
