import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../shared/base.component';
import { Card } from '../model/card';
import { DeckService } from '../services/deck.service';

@Component({
    selector: 'app-creeps',
    templateUrl: './creeps.component.html',
    styleUrls: ['./creeps.component.css']
})
export class CreepsComponent extends BaseComponent implements OnInit {

    @Input() public creepList: Card[];

    constructor(protected deckService: DeckService) {
        super(deckService);
    }

    ngOnInit() {
    }
}
