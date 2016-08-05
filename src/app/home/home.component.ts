import { Component } from '@angular/core';

<<<<<<< HEAD:src/app/home/home.component.ts
import { FeedbackDetails } from './../shared/feedback/feedback-details.component.ts';

@Component({
    selector: 'home-view',
    templateUrl: './home.component.html',
    directives: [FeedbackDetails]
})
export class Home {
    title = "Home section";
=======
import { CapitalizeFirstPipe } from '../pipe/capitalize-first.pipe';
import { FeedbackDetails } from './../shared/feedback/feedback-details.component';

@Component({
    selector: 'home-view',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    directives: [FeedbackDetails],
    pipes: [CapitalizeFirstPipe]
})
export class Home {
    title = "home section"
>>>>>>> master:app/home/home.component.ts
}