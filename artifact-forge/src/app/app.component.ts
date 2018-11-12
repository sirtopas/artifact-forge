import { Component, OnInit } from '@angular/core';
import { DeckService } from './services/deck.service';
import { Cdn } from './model/cdn';
import { CardCollection } from './model/card-collection';
import { Card } from './model/card';
import { CardSet } from './model/card-set';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    setList = ['00', '01'];
    cdn: Cdn;
    cardCollection: CardCollection;
    heroList: Card[];
    passiveAbilityList: Card[];
    spellList: Card[];
    creepList: Card[];
    abilityList: Card[];

    constructor(private deckService: DeckService) { }

    ngOnInit() {
        this.cardCollection = new CardCollection();
        this.cardCollection.card_set = [];
        for (const set of this.setList) {
            this.deckService.getCardsetInformation(set).subscribe(cdn => {
                this.cdn = cdn;
                this.deckService.getAllCards(this.cdn).subscribe(cardCollection => {
                    this.cardCollection.card_set.push(cardCollection.card_set);
                    this.heroList = this.cardCollection.card_set[this.setList.indexOf(set)].card_list.filter(c => c.card_type === 'Hero');
                    this.passiveAbilityList = this.cardCollection.card_set[this.setList.indexOf(set)]
                        .card_list.filter(c => c.card_type === 'Passive Ability');
                    this.spellList = this.cardCollection.card_set[this.setList.indexOf(set)].card_list.filter(c => c.card_type === 'Spell');
                    this.creepList = this.cardCollection.card_set[this.setList.indexOf(set)].card_list.filter(c => c.card_type === 'Creep');
                    this.abilityList = this.cardCollection.card_set[this.setList.indexOf(set)]
                        .card_list.filter(c => c.card_type === 'Ability');
                });
            });
        }
    }

    getReferenceNames(referenceId: number) {
        let referencedCard: Card;
        for (const set of this.setList) {
            referencedCard = this.cardCollection.card_set[this.setList.indexOf(set)].card_list.find(c => c.card_id === referenceId);
        }

        return referencedCard;
    }
}
