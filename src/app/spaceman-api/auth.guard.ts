import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, UrlSegment, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from './player.service';
import { loginUrl } from './tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private playerService: PlayerService,
    private router: Router,
    @Inject(loginUrl) private loginUrlString: string,
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAllowed();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAllowed();
  }

  private isAllowed() {
    const result = !!this.playerService.authToken;
    if (!result) {
      this.router.navigateByUrl(this.loginUrlString);
    }
    return result;
  }

}
