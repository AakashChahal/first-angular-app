import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    bgclr = '';
    count = 0;
    game;
    startGame(data: { evenNumber: boolean }) {
        this.game = setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
    stopGame() {
        clearInterval(this.game);
    }
}
