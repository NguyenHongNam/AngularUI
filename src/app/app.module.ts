import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgToastModule } from 'ng-angular-popup';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CongViecComponent } from './cong-viec/cong-viec.component';
import { DsCViecComponent } from './cong-viec/ds-c-viec/ds-c-viec.component';
import { DanhMucComponent } from './danh-muc/danh-muc.component';
import { DsDMucComponent } from './danh-muc/ds-d-muc/ds-d-muc.component';
import { ThemSuaCViecComponent } from './cong-viec/them-sua-c-viec/them-sua-c-viec.component';
import { ThemSuaDMucComponent } from './danh-muc/them-sua-d-muc/them-sua-d-muc.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SharedService } from './services/shared.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort'
import { NgxPaginationModule } from 'ngx-pagination';
import { AccountModule } from './account/account.module';
import { HomeComponent } from './home/home.component';
// import { TokenInterceptor } from './interceptors/token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    CongViecComponent,
    DsCViecComponent,
    DanhMucComponent,
    DsDMucComponent,
    ThemSuaCViecComponent,
    ThemSuaDMucComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSortModule,
    NgxPaginationModule,
    RouterModule,
    AccountModule,
    NgToastModule
  ],

  providers: [
  //   {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:TokenInterceptor,
  //   multi: true
  // }
],
  bootstrap: [AppComponent]
})

export class AppModule { }
