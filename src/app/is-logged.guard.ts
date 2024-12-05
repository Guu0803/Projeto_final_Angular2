import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const TokenService = inject[TokenService];
  const token = localStorage.getItem('token');
  if (!token) {
    
  }
  return true;
};
