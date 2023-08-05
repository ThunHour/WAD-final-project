import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from "@sentry/angular-ivy";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment.prod';

if (environment.production) {
  enableProdMode();
}

Sentry.init({
  dsn: "https://5fb978e03e1cb3d6f8cb4134c5a9896e@o4505647077851136.ingest.sentry.io/4505650225414144",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracingOrigins: ["localhost", "cipherzernia.tech"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
