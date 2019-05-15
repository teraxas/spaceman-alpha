import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { spacemanApiUrl } from './app/spaceman-api';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: spacemanApiUrl, useValue: environment.apiUrl }
  ]
})
  .catch(err => console.error(err));
