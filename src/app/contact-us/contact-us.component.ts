import { Component } from '@angular/core';

import { CapitalizeFirstPipe } from '../pipe/capitalize-first.pipe';

@Component({
    selector: 'cu-view',
<<<<<<< HEAD:src/app/contact-us/contact-us.component.ts
    templateUrl: './contact-us.component.html'
=======
    moduleId: module.id,
    templateUrl: 'contact-us.component.html',
    pipes: [CapitalizeFirstPipe]
>>>>>>> master:app/contact-us/contact-us.component.ts
})
export class ContactUs {
    title = "contact us section"
}