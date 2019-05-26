import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacemanApiModule, AuthGuard, LoggedInGuard } from './spaceman-api';

const routes: Routes = [
  {
    path: '', redirectTo: 'game', pathMatch: 'full', canActivate: [AuthGuard],
  },
  {
    path: 'player', loadChildren: './player/player.module#PlayerModule',
    canLoad: [LoggedInGuard], canActivate: [LoggedInGuard],
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
