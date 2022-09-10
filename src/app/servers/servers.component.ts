import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    numClicks = 0;
    message = this.numClicks
        ? `button clicked ${this.numClicks} times`
        : 'button not clicked yet';

    constructor() {
        setTimeout(() => (this.allowNewServer = true), 2000);
    }

    ngOnInit(): void {}

    buttonClicked() {
        this.numClicks += 1;
        this.message = this.numClicks
            ? `button clicked ${this.numClicks} times`
            : 'button not clicked yet';
    }
}
