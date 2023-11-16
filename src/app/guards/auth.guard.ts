import { CanActivateFn, Router } from '@angular/router';
import {Injectable, inject} from '@angular/core';
import { AuthService} from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const toast = inject(NgToastService)
  if (authService.isLoggedIn()){
    return true;
  }else{
    toast.error({detail:"ERROR",summary:"Bạn phải đăng nhập!"})
    return router.navigate(['/login'])
  }
};
