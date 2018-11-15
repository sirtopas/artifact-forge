import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../shared/base.component';
import { Card } from '../model/card';
import { DeckService } from '../services/deck.service';

@Component({
    selector: 'app-spells',
    templateUrl: './spells.component.html',
    styleUrls: ['./spells.component.css']
})
export class SpellsComponent extends BaseComponent implements OnInit {

    @Input() public spellList: Card[];

    constructor(protected deckService: DeckService) {
        super(deckService);
    }

    ngOnInit() {
    }
}
