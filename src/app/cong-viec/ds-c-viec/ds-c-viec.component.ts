import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-ds-c-viec',
  templateUrl: './ds-c-viec.component.html',
  styleUrls: ['./ds-c-viec.component.css']
})
export class DsCViecComponent {
  tieuDe: any;
  page: number= 1;
  i: any;
  thuTuSapXep: 'asc' | 'desc' = 'asc';
  tuKhoaTimKiem: string = '';
  trangHienTai: number = 1; 
  soLuongCongViecTrenTrang: number = 8; 
  constructor(private service:SharedService){
    this.DSCongViec = this.service.layDSCongViec();
  }

  DSCongViec:any=[];
  cViec:any;
  dangThemSua: boolean = false;
  ngOnInit():void{
    this.tailaiDSCongViec();
  }
  onTuKhoaTimKiemChange() {
    this.timKiemCongViec();
  }
  chuyenDoiThuTuSapXep() {
    this.thuTuSapXep = this.thuTuSapXep === 'asc' ? 'desc' : 'asc';
  }
  sapXepBang(col: string) {
    // Sắp xếp mảng dựa trên cột được chọn và thứ tự sắp xếp
    this.DSCongViec.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => {
      if (this.thuTuSapXep === 'asc') {
        return a[col] - b[col];
      } else {
        return b[col] - a[col];
      }
    });
    this.trangHienTai = 1;
  }
  tailaiDSCongViec(){
    this.service.layDSCongViec().subscribe(data =>{
      this.DSCongViec = data;
    });
  };
  chitietCongViec(cViec:any){
    this.dangThemSua=false;
    this.cViec = cViec;
    this.dangThemSua=true;
    this.tieuDe="Sửa công việc"
  }
  close(){
    this.dangThemSua=false;
  }
  themCongViec(){
    this.cViec={
      TaskID: 0,
      Title:"",
      Description:"",
      TagName:"",
    }
    this.dangThemSua=true;
    this.tieuDe="Thêm công việc"
  }
  xoaCongViec(TaskID:number){
    if(confirm("Xoá công việc này ?")){
      this.service.xoaCongViec(TaskID).subscribe(
        data =>{
          alert(data.toString());
          this.tailaiDSCongViec(); 
        }
      )
    }
  }
  replaceTextSearch(text: string){
    debugger;
    let string = text.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, m => m === 'đ' ? 'd' : 'D');
    return string;
  }
  timKiemCongViec() {
    if (this.tuKhoaTimKiem) {   
      this.DSCongViec = this.DSCongViec.filter((dMuc: any) =>
      this.replaceTextSearch(dMuc.TagName).includes(this.replaceTextSearch(this.tuKhoaTimKiem))
      );
    } else {
      this.tailaiDSCongViec();
    }
    this.trangHienTai = 1;
  }
  layDanhMucTrenTrang() {
    const batDau = (this.trangHienTai - 1) * this.soLuongCongViecTrenTrang;
    const ketThuc = batDau + this.soLuongCongViecTrenTrang;
    return this.DSCongViec.slice(batDau, ketThuc);
  }
}
