import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacemanApiModule, AuthGuard } from './spaceman-api';

const routes: Routes = [
  {
    path: 'player', loadChildren: './player/player.module#PlayerModule'
  },
  {
    path: 'game', loadChildren: './game/game.module#GameModule',
    canLoad: [AuthGuard], canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SpacemanApiModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
