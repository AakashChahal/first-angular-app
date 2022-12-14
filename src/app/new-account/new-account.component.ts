import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
    // @Output() accountAdded = new EventEmitter<{
    //     name: string;
    //     status: string;
    // }>();

    constructor(private accountsService: AccountsService) {}

    onCreateAccount(accountName: string, accountStatus: string) {
        // this.accountAdded.emit({
        //     name: accountName,
        //     status: accountStatus,
        // });
        // console.log('A server status changed, new status: ' + accountStatus);
        this.accountsService.addAccount(accountName, accountStatus);
    }
}
