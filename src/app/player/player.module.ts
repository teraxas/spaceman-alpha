import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SpacemanApiModule } from '../spaceman-api';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SpacemanApiModule,
  ]
})
export class PlayerModule { }
