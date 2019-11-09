import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpacemanApiModule } from '../spaceman-api';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
];

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SpacemanApiModule,
    SharedModule,
  ]
})
export class GameModule { }
