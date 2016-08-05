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
var category_services_1 = require('./shared/category.services');
var WhatWeDo = (function () {
    function WhatWeDo(categoryService) {
        this.categoryService = categoryService;
        this.title = "what we do section";
    }
    WhatWeDo.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().then(function (cat) { return _this.categories = cat; });
    };
    WhatWeDo.prototype.ngOnInit = function () {
        this.getCategories();
    };
    WhatWeDo = __decorate([
        core_1.Component({
            selector: 'wwd-view',
            templateUrl: './what-we-do.component.html',
            providers: [category_services_1.CategoryServices]
        }), 
        __metadata('design:paramtypes', [category_services_1.CategoryServices])
    ], WhatWeDo);
    return WhatWeDo;
}());
exports.WhatWeDo = WhatWeDo;
//# sourceMappingURL=what-we-do.component.js.map