import { Component, OnInit } from '@angular/core';
import { DeckService } from './services/deck.service';
import { Cdn } from './model/cdn';
import { CardCollection } from './model/card-collection';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    cdn: Cdn;
    cardCollection: CardCollection;

    constructor(private deckService: DeckService) { }

    ngOnInit() {
        this.deckService.getCardsetInformation().subscribe(cdn => {
            this.cdn = cdn;
            this.deckService.getAllCards(this.cdn).subscribe(cardCollection => {
                this.cardCollection = cardCollection;
            });
        });
    }
}
