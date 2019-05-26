import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Player, PlayerFull, PlayerLoginInfo } from './model';
import { spacemanApiUrl, windowToken, storageToken } from './tokens';

const authTokenKey = 'auth_token';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private _authToken: string;

  constructor(
    private http: HttpClient,
    @Inject(spacemanApiUrl) private apiUrl: string,
    @Inject(windowToken) private windowRef: Window,
    @Inject(storageToken) private storage: Storage,
  ) {
    this.apiUrl = `${apiUrl}/api/Player`;
    this.popToken();
    this.windowRef.addEventListener('unload', this.saveAuthToken.bind(this));
  }

  get(): Observable<Player> {
    return this.http.get<Player>(this.apiUrl);
  }

  save(player: PlayerFull): Observable<Player> {
    return this.http.post<Player>(this.apiUrl, player);
  }

  authenticate(player: PlayerLoginInfo): Observable<Player> {
    return this.http.post<{ player: Player, token: string }>(`${this.apiUrl}/authenticate`, player)
      .pipe(
        tap((v) => this.setAuthToken(v.token)),
        map(v => v.player),
        // catchError(e => of(undefined)),
      );
  }

  get authToken(): string {
    return this._authToken;
  }

  private setAuthToken(token: string) {
    this._authToken = token;
  }

  private saveAuthToken() {
    if (this._authToken) {
      this.storage.setItem(authTokenKey, this._authToken);
    }
  }

  private popToken() {
    const token = this.storage.getItem(authTokenKey);
    this.storage.removeItem(authTokenKey);
    this.setAuthToken(token);
  }

}
