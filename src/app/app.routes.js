var router_1 = require('@angular/router');
var home_component_ts_1 = require('./home/home.component.ts');
var contact_us_component_ts_1 = require('./contact-us/contact-us.component.ts');
var what_we_do_component_ts_1 = require('./what-we-do/what-we-do.component.ts');
var routes = [
    { path: 'home', component: home_component_ts_1.Home },
    { path: 'what-we-do', component: what_we_do_component_ts_1.WhatWeDo },
    { path: 'contact-us', component: contact_us_component_ts_1.ContactUs }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map