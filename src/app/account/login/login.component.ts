import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgToastComponent, NgToastModule, NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type:string="password"
  isText:boolean=false;
  eyeIcon:string = "fa-eye-slash";
  loginForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private auth:AuthService,private router:Router,private toast:NgToastService){

  }
  ngOnInit():void{
    this.loginForm = this.formbuilder.group({
      UserName:['',Validators.required],
      Password:['',Validators.required]
    })
  }
  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value).subscribe({
        next:(res)=>{
          console.log(res.Message);
          this.loginForm.reset();
          this.auth.storeToken(res.token);
          this.toast.success({detail:"Thành công",summary:res.Message,duration:5000});
          this.router.navigate(['home'])
        },
        error:(err)=>{
          this.toast.success({detail:"Lỗi",summary:"Lỗi",duration:5000});
          console.log(err);
        }
      })
    }else{
      console.log("Form is invalid")
      this.validateAllFormFields(this.loginForm)
      alert("sai tài khoản hoặc mật khẩu")
    }
  }
  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }else if(control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" :this.type = "password"
  }
}
