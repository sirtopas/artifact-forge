import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../model/card';
import { BaseComponent } from '../shared/base.component';
import { DeckService } from '../services/deck.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent extends BaseComponent implements OnInit {

    @Input() public heroList: Card[];

    constructor(protected deckService: DeckService) {
        super(deckService);
    }

    ngOnInit() {
    }

}
