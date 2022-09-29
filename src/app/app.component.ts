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
import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    accounts: { name: string; status: string }[] = [];

    constructor(private accountService: AccountsService) {}

    ngOnInit(): void {
        this.accounts = this.accountService.accounts;
    }
}
