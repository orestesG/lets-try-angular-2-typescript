import { Component } from '@angular/core';
import { FeedbackDetails } from './feedback.details.component'

@Component({
    selector: 'home',
    templateUrl: '../templates/HomeComponent.html',
    directives: [FeedbackDetails]
})
export class Home {
    title = "Home section"
}