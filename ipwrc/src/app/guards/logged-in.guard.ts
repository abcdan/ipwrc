import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../authentication/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthserviceService,
    private router: Router) {}
     canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const response = this.authService.check().toPromise().then (r => {
          let res = r as any
          return res.success
        }).catch(e => {
          this.authService.signOut()
          if(route.url.length > 0 && route.url[0].path === 'make-order') {
            this.router.navigate(['/auth/choose'], {
              queryParams: {
                ref: 'cart'
              }
            })
          } else {
            this.router.navigate(['/auth/choose'])
          }
          return false
        })
        return response
  }
  
  
}
