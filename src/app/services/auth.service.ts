import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TokenModel } from '../models/tokenModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiLoginUrl = 'https://localhost:44383/api/auth/login';

  constructor(private httpClient: HttpClient) {}

  login(user: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiLoginUrl,
      user
    );
  }

  // HTTP uygulamaları unutkan bir servistir. Login olsak bile browser'ı refresh ettiğimizde login response'unu unutur. Bu nedenle "localStorage"'da bu bilginin saklanması gerekir.
  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
