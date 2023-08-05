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

})
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
