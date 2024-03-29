import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    return this.authService.isLoggedIn.pipe(
      map((loggedIn: boolean) => {
        if (!loggedIn) {
          this.router.navigate(['/sign-in']);
          return false;
        }
        return true;
      })
    );
  }
}
