import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { Feedback } from './feedback';


@Injectable()
export class FeedbackServices {
    private feedbackUrl = 'app/feedback'; // URL to web api
    constructor(private http: Http) { }

    getFeedbacks() {
        return this.http.get(this.feedbackUrl).
            toPromise().then(response => response.json().data as Feedback[]).catch(this.handleError)

    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}