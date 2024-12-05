import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private readonly httpClient: HttpClient) { }
  login(payload: LoginRequest) {
    return this.httpClient.post<LoginResponse>(`${environment.animeJokenPoApi}/auth/sign-in`, payload);
  }
}
export interface LoginResponse{
  acessToken: string;
}
export interface LoginRequest{
  username: string;
  password: string;
}