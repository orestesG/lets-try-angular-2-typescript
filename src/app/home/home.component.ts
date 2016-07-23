import { Component } from '@angular/core';

import { FeedbackDetails } from './../shared/feedback/feedback-details.component.ts';

@Component({
    selector: 'home-view',
    templateUrl: './home.component.html',
    directives: [FeedbackDetails]
})
export class Home {
    title = "Home section";
}