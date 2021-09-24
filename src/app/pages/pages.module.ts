import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from '../pages/auth/login/login.component'


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class PagesModule { }
