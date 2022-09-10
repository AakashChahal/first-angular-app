import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: ` <p>Warning Alert Component</p> `,
    styles: [
        `
            p {
                width: 70vw;
                border: 1px solid red;
                padding: 10px;
                margin: 0 auto;
                background-color: rgba(200, 0, 0, 0.3);
                text-align: center;
            }
        `,
    ],
})
export class WarningComponent {}
