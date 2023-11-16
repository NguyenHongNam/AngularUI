import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  type:string="password"
  isText:boolean=false;
  eyeIcon:string = "fa-eye-slash";
  signUpForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private auth:AuthService, private router:Router){

  }
  ngOnInit():void{
    this.signUpForm = this.formbuilder.group({
      Email:['',Validators.required],
      UserName:['',Validators.required],
      Password:['',Validators.required]
    })
  }
  onSignup(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value)
      this.auth.signUp(this.signUpForm.value).subscribe({
        next:(res=>{
          alert(res.Message)
          this.signUpForm.reset();
          this.router.navigate(['login'])
        }),
        error:(err =>{
          alert(err?.error.Message)
        })
      })
    }else{
      console.log("Form is invalid")
      this.validateAllFormFields(this.signUpForm)
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
