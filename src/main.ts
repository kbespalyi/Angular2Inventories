import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationRef } from "@angular/core";
import { enableProdMode } from '@angular/core';
import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(module => {
    let injector = module.injector;
    let application = injector.get(ApplicationRef);
    let appComponent = application.components[0];
    if (environment.production) {
      enableDebugTools(appComponent);

      // in console: ng.profiler.timeChangeDetection();
    }
  });
