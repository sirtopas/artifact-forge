import { Component, OnInit } from '@angular/core';
import { DeckService } from '../services/deck.service';
import { BaseComponent } from '../shared/base.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent {

    constructor(protected deckService: DeckService) {
        super(deckService);
    }
}
