import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import { LetsTryNav } from './shared/navigation/nav.component.ts';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [ require('./styles.scss') ],
    directives: [ROUTER_DIRECTIVES, LetsTryNav]
})
export class AppComponent {
    title = 'Lets try Angular 2';
}
