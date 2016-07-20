import { Component } from '@angular/core';
import { Category } from './category';
import { CategoryServices } from './category.services';
import { OnInit } from '@angular/core';

@Component({
    selector: 'what-we-do',
    templateUrl: '../templates/WhatWeDoComponent.html',
    providers: [CategoryServices]
})
export class WhatWeDo implements OnInit {
    categories: Category[];
    title = "What we do section";
    constructor(private categoryService: CategoryServices) {

    }
    getCategories() {
        this.categoryService.getCategories().then(cat => this.categories = cat);
    }
    ngOnInit() {
        this.getCategories();
    }

}