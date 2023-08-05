import { Injectable } from '@angular/core';
import * as Sentry from '@sentry/angular-ivy';

@Injectable({
  providedIn: 'root'
})
export class SentryService {

  constructor() { }
  handleError(error: any): void {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}
