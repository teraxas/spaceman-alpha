import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Player, PlayerFull } from './model';
import { spacemanApiUrl } from './tokens';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private _authToken: string;

  constructor(
    @Inject(spacemanApiUrl) private apiUrl: string,
    private http: HttpClient,
  ) {
    this.apiUrl = `${apiUrl}/Player`;
  }

  get(): Observable<Player> {
    return this.http.get<Player>(this.apiUrl);
  }

  save(player: PlayerFull): Observable<Player> {
    return this.http.post<Player>(this.apiUrl, player);
  }

  authenticate(player: PlayerFull): Observable<Player> {
    return this.http.post<{ player: Player, token: string }>(`${this.apiUrl}/authenticate`, player)
      .pipe(
        tap((v) => this.setAuthToken(v.token)),
        map(v => v.player)
      );
  }

  get authToken(): string {
    return this._authToken;
  }

  private setAuthToken(token: string) {
    this._authToken = token;
  }

}
