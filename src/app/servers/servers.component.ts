import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    numClicks = 0;
    message = 'button not clicked yet';
    serverName = '';

    constructor() {
        setTimeout(() => (this.allowNewServer = true), 2000);
    }

    ngOnInit(): void {}

    buttonClicked() {
        this.numClicks += 1;
        this.message = `button clicked ${this.numClicks} times`;
    }

    onServerNameUpdate(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
