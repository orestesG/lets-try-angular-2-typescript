import { provideRouter, RouterConfig } from '@angular/router';

import { Home } from './home.component';
import { WhatWeDo } from './what-we-do.component';
import { ContactUs } from './contact-us.component';

const routes: RouterConfig = [
    { path: 'home', component: Home },
    { path: 'what-we-do', component: WhatWeDo },
    { path: 'contact-us', component: ContactUs }
];

export const appRouterProviders = [
    provideRouter(routes)
];
