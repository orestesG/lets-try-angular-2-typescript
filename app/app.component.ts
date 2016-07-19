import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { LetsTryNav } from './nav.component';

@Component({
    selector: 'my-app',
    templateUrl: '../templates/AppComponent.html',
    styleUrls:['../css/styles.css'],
    directives: [ROUTER_DIRECTIVES, LetsTryNav]

})
export class AppComponent {
    title = 'Lets try Angular 2';
}
