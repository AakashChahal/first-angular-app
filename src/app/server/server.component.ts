import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [
        `
            .online {
                text-decoration: underline;
                text-transform: uppercase;
            }
        `,
    ],
})
export class ServerComponent {
    serverId = 121;
    serverStatus = 'Online';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
}
