import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { AuthServiceFromServer } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class GlobalErrorService implements ErrorHandler {

  constructor(
    private authService: AuthServiceFromServer
  ) { }
  handleError(error: any): void {
    if (error.status == 401) {
      this.authService.signOut();
    }
    throw error;
  }
}
