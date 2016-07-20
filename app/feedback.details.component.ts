import { Component, OnInit } from '@angular/core';
import { Feedback } from './feedback';
import { FeedbackServices } from './feedback.services'

@Component({
    selector: 'feedback-detail',
    templateUrl: '../templates/FeedbackDetails.html',
    providers: [FeedbackServices]
})
export class FeedbackDetails implements OnInit {
    feedback: Feedback[];
    error: any;
    constructor(private feedbackServices: FeedbackServices) { }

    getFeedback() {
        this.feedbackServices.getFeedback().then(feedbck => this.feedback = feedbck)
            .catch(error => this.error = error);
    }
    ngOnInit() {
        this.getFeedback();

    }

}