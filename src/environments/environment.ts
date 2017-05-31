// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

import * as core from '@angular/core';
import * as common from '@angular/common';
import * as compiler from '@angular/compiler';
import * as browser from '@angular/platform-browser';
import * as browserd from '@angular/platform-browser-dynamic';
import { isDevMode } from "@angular/core";

if (isDevMode()) {
  window['@angular/core'] = core;
  window['@angular/common'] = common;
  window['@angular/compiler'] = compiler;
  window['@angular/platform-browser'] = browser;
  window['@angular/platform-browser-dynamic'] = browserd;
}

export const environment = {
  production: false
};
