import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpacemanApiModule } from '../spaceman-api';
import { MainComponent } from './main/main.component';

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
  ]
})
export class GameModule { }
