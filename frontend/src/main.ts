import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from "@sentry/angular-ivy";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment.prod';

if (environment.production) {
  enableProdMode();
}

Sentry.init({
  dsn: "https://3787fc163ce0fbd5e76c8a635ed1d400@o4505647077851136.ingest.sentry.io/4505650085298176",

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,
  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  integrations: [new Sentry.Replay()],
})
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
