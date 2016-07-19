import { Component, OnInit } from '@angular/core';
import { Feedback } from './feedback';
import { FeedbackServices } from './feedback.services'

@Component({
    selector: 'feedback-detail',
    templateUrl: '../templates/FeedbackDetails.html',
    providers: [FeedbackServices]
})
export class FeedbackDetails implements OnInit {
    feedbacks: Feedback[];
    error: any;
    constructor(private feedbackServices: FeedbackServices) { }

    getFeedback() {
        this.feedbackServices.getFeedbacks().then(feedbck => this.feedbacks = feedbck)
            .catch(error => this.error = error);
    }
    ngOnInit() {
        this.getFeedback();

    }

}