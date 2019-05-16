import { PlayerService } from './player.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

const headerName = 'Authorization';

export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private loginUrlString: string,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({ headers: req.headers.set(headerName, this.playerService.authToken) });
    return next.handle(authReq)
      .pipe(
        catchError(x => this.handleAuthError(x))
      );
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      this.router.navigateByUrl(this.loginUrlString);
      return of(err.message);
    }
    return throwError(err);
  }

}
