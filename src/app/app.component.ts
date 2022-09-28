// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-root',
//     templateUrl: './app.component.html',
//     styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//     bgclr = '';
//     count = 0;
//     game;
//     numbers: number[] = [];
//     startGame(data: { evenNumber: boolean }) {
//         this.game = setInterval(() => {
//             this.count++;
//             this.numbers.push(this.count);
//         }, 1000);
//     }
//     stopGame() {
//         clearInterval(this.game);
//     }
// }
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    accounts = [
        {
            name: 'Master Account',
            status: 'active',
        },
        {
            name: 'Testaccount',
            status: 'inactive',
        },
        {
            name: 'Hidden Account',
            status: 'unknown',
        },
    ];

    onAccountAdded(newAccount: { name: string; status: string }) {
        this.accounts.push(newAccount);
    }

    onStatusChanged(updateInfo: { id: number; newStatus: string }) {
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
    }
}
