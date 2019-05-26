import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from './player.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthInterceptor } from './auth.interceptor';
import { loginUrl } from './tokens';
import { AuthGuard } from './auth.guard';
import { LoggedInGuard } from './logged-in.guard';

const authInterceptorFactory = function (
  playerService: PlayerService,
  router: Router,
  loginUrlString: string,
) {
  return new AuthInterceptor(playerService, router, loginUrlString);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SpacemanApiModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SpacemanApiModule,
      providers: [
        AuthGuard,
        LoggedInGuard,
        PlayerService,
        {
          provide: HTTP_INTERCEPTORS,
          useFactory: authInterceptorFactory,
          multi: true,
          deps: [Router, PlayerService, loginUrl]
        },
      ]
    };
  }
}
