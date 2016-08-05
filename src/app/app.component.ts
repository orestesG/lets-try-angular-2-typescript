import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import { LetsTryNav } from './shared/navigation/nav.component.ts';

@Component({
    selector: 'my-app',
<<<<<<< HEAD:src/app/app.component.ts
    templateUrl: './app.component.html',
    styles: [ require('./styles.scss') ],
=======
    moduleId: module.id,
    templateUrl: 'app.component.html',
>>>>>>> master:app/app.component.ts
    directives: [ROUTER_DIRECTIVES, LetsTryNav]
})
export class AppComponent {
    title = 'Lets try Angular 2';
}
