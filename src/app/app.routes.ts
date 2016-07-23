import { provideRouter, RouterConfig } from '@angular/router';

import { Home } from './home/home.component.ts';
import { ContactUs } from './contact-us/contact-us.component.ts';
import { WhatWeDo } from './what-we-do/what-we-do.component.ts';

const routes: RouterConfig = [
    { path: 'home', component: Home },
    { path: 'what-we-do', component: WhatWeDo },
    { path: 'contact-us', component: ContactUs }
];

export const appRouterProviders = [
    provideRouter(routes)
];
