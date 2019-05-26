import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from './player.service';
import { gameUrl } from './tokens';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(
    private playerService: PlayerService,
    private router: Router,
    @Inject(gameUrl) private gameUrlString: string,
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAllowed();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAllowed();
  }

  private isAllowed() {
    const result = !this.playerService.authToken;
    if (!result) {
      this.router.navigateByUrl(this.gameUrlString);
    }
    return result;
  }

}
