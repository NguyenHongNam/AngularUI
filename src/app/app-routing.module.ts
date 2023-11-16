import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongViecComponent } from './cong-viec/cong-viec.component';
import { DanhMucComponent } from './danh-muc/danh-muc.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'cong viec',component:CongViecComponent,canActivate:[authGuard]},
  {path:'danh muc',component:DanhMucComponent,canActivate:[authGuard]},
  {path:'account',component:AccountComponent,canActivate:[authGuard]},
  {path:'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'home',component:HomeComponent,canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
