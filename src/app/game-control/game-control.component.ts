import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
    @Output() gameStarted = new EventEmitter<{
        evenNumber: boolean;
        oddNumber: boolean;
    }>();
    @Output() gameStopped = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    startClicked() {
        this.gameStarted.emit({ evenNumber: false, oddNumber: false });
    }

    stopClicked() {
        this.gameStopped.emit();
    }
}
