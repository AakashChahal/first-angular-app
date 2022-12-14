// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { ServerComponent } from './server/server.component';
// import { FormsModule } from '@angular/forms';
// import { ServersComponent } from './servers/servers.component';
// import { GameControlComponent } from './game-control/game-control.component';
// import { OddComponent } from './odd/odd.component';
// import { EvenComponent } from './even/even.component';
// import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
// import { BetterHighlightDirectiveDirective } from './better-highlight/better-highlight-directive.directive';
// import { UnlessDirective } from './unless.directive';

// @NgModule({
//     declarations: [
//         AppComponent,
//         ServerComponent,
//         ServersComponent,
//         GameControlComponent,
//         OddComponent,
//         EvenComponent,
//         BasicHighlightDirective,
//         BetterHighlightDirectiveDirective,
//         UnlessDirective,
//     ],
//     imports: [BrowserModule, FormsModule],
//     providers: [],
//     bootstrap: [AppComponent],
// })
// export class AppModule {}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';

@NgModule({
    declarations: [AppComponent, AccountComponent, NewAccountComponent],
    imports: [BrowserModule, FormsModule],
    providers: [AccountsService, LoggingService],
    bootstrap: [AppComponent],
})
export class AppModule {}
