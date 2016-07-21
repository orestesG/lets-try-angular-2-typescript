import { Component } from '@angular/core';

import { FeedbackDetails } from './../shared/feedback/feedback-details.component'

@Component({
    selector: 'home-view',
    templateUrl: 'app/home/home.component.html',
    directives: [FeedbackDetails]
})
export class Home {
    title = "Home section"
}