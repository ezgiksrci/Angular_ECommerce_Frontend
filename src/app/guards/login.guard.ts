import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  if (inject(AuthService).isAuthenticated()) {
    return true;
  } else {
    inject(Router).navigate(['login']);
    inject(ToastrService).error('Please sign-in.');
    return false;
  }
};
