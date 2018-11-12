import { Component, OnInit } from '@angular/core';
import { DeckService } from './services/deck.service';
import { Cdn } from './model/cdn';
import { CardCollection } from './model/card-collection';
import { Card } from './model/card';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    cdn: Cdn;
    cardCollection: CardCollection;
    heroList: Card[];
    passiveAbilityList: Card[];
    spellList: Card[];
    creepList: Card[];
    abilityList: Card[];

    constructor(private deckService: DeckService) { }

    ngOnInit() {
        this.deckService.getCardsetInformation().subscribe(cdn => {
            this.cdn = cdn;
            this.deckService.getAllCards(this.cdn).subscribe(cardCollection => {
                this.cardCollection = cardCollection;
                this.heroList = this.cardCollection.card_set.card_list.filter(c => c.card_type === 'Hero');
                this.passiveAbilityList = this.cardCollection.card_set.card_list.filter(c => c.card_type === 'Passive Ability');
                this.spellList = this.cardCollection.card_set.card_list.filter(c => c.card_type === 'Spell');
                this.creepList = this.cardCollection.card_set.card_list.filter(c => c.card_type === 'Creep');
                this.abilityList = this.cardCollection.card_set.card_list.filter(c => c.card_type === 'Ability');
            });
        });
    }
}
