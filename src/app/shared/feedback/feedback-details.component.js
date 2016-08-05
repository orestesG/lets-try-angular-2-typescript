"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var feedback_services_1 = require('./feedback.services');
var FeedbackDetails = (function () {
    function FeedbackDetails(feedbackServices) {
        this.feedbackServices = feedbackServices;
    }
    FeedbackDetails.prototype.getFeedback = function () {
        var _this = this;
        this.feedbackServices.getFeedback().then(function (f) { return _this.feedback = f; })
            .catch(function (error) { return _this.error = error; });
    };
    FeedbackDetails.prototype.ngOnInit = function () {
        this.getFeedback();
    };
    FeedbackDetails = __decorate([
        core_1.Component({
            selector: 'fd-view',
            templateUrl: './feedback-details.component.html',
            providers: [feedback_services_1.FeedbackServices]
        }), 
        __metadata('design:paramtypes', [feedback_services_1.FeedbackServices])
    ], FeedbackDetails);
    return FeedbackDetails;
}());
exports.FeedbackDetails = FeedbackDetails;
//# sourceMappingURL=feedback-details.component.js.map