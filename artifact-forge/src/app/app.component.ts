import { Component, OnInit } from '@angular/core';
import { DeckService } from './services/deck.service';
import { Cdn } from './model/cdn';
import { Card } from './model/card';
import { CardSet } from './model/card-set';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    cdn: Cdn;
    cardSet: CardSet;

    constructor(private deckService: DeckService) { }

    ngOnInit() {
        this.deckService.getCardsetInformation().subscribe(cdn => {
            this.cdn = cdn;
            this.deckService.getAllCards(this.cdn).subscribe(cardSet => {
                this.cardSet = cardSet;
                console.log(this.cardSet)
            });
        });
    }
}
