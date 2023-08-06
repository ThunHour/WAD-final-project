import { Injectable } from '@angular/core';
import * as Sentry from '@sentry/angular-ivy';
import { AuthServiceFromServer } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SentryService {

  constructor(private authService: AuthServiceFromServer) { }
  handleError(error: any): void {
    
    Sentry.captureException(error.originalError || error);
    if (error.status == 401) {
      this.authService.signOut();
    }
    throw error;
  }
}
