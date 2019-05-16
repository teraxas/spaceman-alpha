import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from './player.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthInterceptor } from './auth.interceptor';
import { loginUrl, spacemanApiUrl } from './tokens';
import { AuthGuard } from './auth.guard';
import { environment } from 'src/environments/environment';

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
        PlayerService,
        {
          provide: HTTP_INTERCEPTORS,
          useFactory: function (
            playerService: PlayerService,
            router: Router,
            loginUrlString: string,
          ) {
            return new AuthInterceptor(playerService, router, loginUrlString);
          },
          multi: true,
          deps: [Router, PlayerService, loginUrl]
        },
        { provide: spacemanApiUrl, useValue: environment.apiUrl },
        { provide: loginUrl, useValue: '/player/login' },
      ]
    };
  }
}
