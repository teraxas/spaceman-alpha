import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player, PlayerFull } from './model';
import { spacemanApiUrl } from './tokens';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerService /*implements CanActivate*/ {

  constructor(
    @Inject(spacemanApiUrl) private apiUrl: string,
    private http: HttpClient,
  ) {
    this.apiUrl = `${apiUrl}/Player`;
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return this.get().pipe(
  //     catch ()
  //   );
  // }

  get(): Observable<Player> {
    return this.http.get<Player>(this.apiUrl);
  }

  save(player: PlayerFull): Observable<Player> {
    return this.http.post<Player>(this.apiUrl, player);
  }

  authenticate(player: PlayerFull): Observable<{ player: Player, token: string }> {
    return this.http.post<{ player: Player, token: string }>(`${this.apiUrl}/authenticate`, player);
  }
}
