"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require("@angular/http");
var app_component_ts_1 = require('./app/app.component.ts');
var app_routes_ts_1 = require("./app/app.routes.ts");
//loading and configuring in-memory web api
var http_2 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_ts_1 = require('./app/shared/in-memory-data.service.ts');
platform_browser_dynamic_1.bootstrap(app_component_ts_1.AppComponent, [app_routes_ts_1.appRouterProviders, http_1.HTTP_PROVIDERS, { provide: http_2.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
    { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_data_service_ts_1.InMemoryDataService } // in-mem server data
]);
//# sourceMappingURL=main.js.map