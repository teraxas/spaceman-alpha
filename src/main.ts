import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { spacemanApiUrl, loginUrl, storageToken, windowToken, gameUrl } from './app/spaceman-api';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  { provide: storageToken, useValue: window.localStorage },
  { provide: windowToken, useValue: window },
  { provide: spacemanApiUrl, useValue: environment.apiUrl },
  { provide: loginUrl, useValue: '/player/login' },
  { provide: gameUrl, useValue: '/game' },
]).bootstrapModule(AppModule)
  .catch(err => console.error(err));
