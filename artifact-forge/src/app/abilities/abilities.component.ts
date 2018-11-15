import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../shared/base.component';
import { Card } from '../model/card';
import { DeckService } from '../services/deck.service';

@Component({
    selector: 'app-abilities',
    templateUrl: './abilities.component.html',
    styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent extends BaseComponent implements OnInit {

    @Input() public abilityList: Card[];

    constructor(protected deckService: DeckService) {
        super(deckService);
    }

    ngOnInit() {
    }
}
