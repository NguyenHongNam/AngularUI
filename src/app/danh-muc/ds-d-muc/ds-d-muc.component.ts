import { Component,OnInit,Input, ViewChild, AfterViewInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-ds-d-muc',
  templateUrl: './ds-d-muc.component.html',
  styleUrls: ['./ds-d-muc.component.css']
})
export class DsDMucComponent implements OnInit{
  tieuDe: any;
  page: number= 1;
  i: any;
  thuTuSapXep: 'asc' | 'desc' = 'asc';
  tuKhoaTimKiem: string = '';
  trangHienTai: number = 1; 
  soLuongDanhMucTrenTrang: number = 8; 
  constructor(private service:SharedService){
    this.DSDanhMuc = this.service.layDSDanhMuc();
  }
  DSDanhMuc:any=[];
  dMuc:any;
  dangThemSua: boolean = false;
  ngOnInit():void{
    this.tailaiDSDanhMuc();
  }
  onTuKhoaTimKiemChange() {
    this.timKiemDanhMuc();
  }
  tailaiDSDanhMuc(){
    this.service.layDSDanhMuc().subscribe(data =>{
      this.DSDanhMuc = data;
    });
  };
  chuyenDoiThuTuSapXep() {
    this.thuTuSapXep = this.thuTuSapXep === 'asc' ? 'desc' : 'asc';
  }
  sapXepBang(col: string) {
    // Sắp xếp mảng dựa trên cột được chọn và thứ tự sắp xếp
    this.DSDanhMuc.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => {
      if (this.thuTuSapXep === 'asc') {
        return a[col] - b[col];
      } else {
        return b[col] - a[col];
      }
    });
    this.trangHienTai = 1;
  }
  chitietDanhMuc(dMuc:any){
    this.dangThemSua=false;
    this.dMuc = dMuc;
    this.dangThemSua=true;
    this.tieuDe="Sửa danh mục"
  }
  close(){
    this.dangThemSua=false;
  }
  themDanhMuc(){
    this.dMuc={
      TagID: 0,
      TagName:"",
    }
    this.dangThemSua=true;
    this.tieuDe="Thêm danh mục"
  }
  xoaDanhMuc(tag : any){
    debugger
    if(confirm("Xoá công việc này ?")){
      this.service.xoaDanhMuc(tag.TagID).subscribe(
        data =>{
          alert(data.toString());
          this.tailaiDSDanhMuc(); 
        }
      )
    }
  }
  timKiemDanhMuc() {
    if (this.tuKhoaTimKiem) {   
      this.DSDanhMuc = this.DSDanhMuc.filter((dMuc: any) =>
      this.replaceTextSearch(dMuc.TagName).includes(this.replaceTextSearch(this.tuKhoaTimKiem))
      );
    } else {
      this.tailaiDSDanhMuc();
    }
    this.trangHienTai = 1;
  }
  layDanhMucTrenTrang() {
    const batDau = (this.trangHienTai - 1) * this.soLuongDanhMucTrenTrang;
    const ketThuc = batDau + this.soLuongDanhMucTrenTrang;
    return this.DSDanhMuc.slice(batDau, ketThuc);
  }
  replaceTextSearch(text: string){
    debugger;
    let string = text.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, m => m === 'đ' ? 'd' : 'D');
    return string;
  }
}
