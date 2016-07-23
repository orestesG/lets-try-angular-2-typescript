import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from "@angular/http";

import { AppComponent } from './app/app.component.ts';
import { appRouterProviders } from "./app/app.routes.ts";


//loading and configuring in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './app/shared/in-memory-data.service.ts';

bootstrap(AppComponent, [appRouterProviders, HTTP_PROVIDERS, {provide: XHRBackend, useClass: InMemoryBackendService}, // in-mem server
    {provide: SEED_DATA, useClass: InMemoryDataService}      // in-mem server data
]);
