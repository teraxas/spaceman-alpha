import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from './player.service';
import { HttpClientModule } from '@angular/common/http';

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
        PlayerService,
      ]
    };
  }
}
