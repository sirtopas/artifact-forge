import { Component, OnInit } from '@angular/core';
import { DeckService } from './services/deck.service';
import { Cdn } from './model/cdn';
import { CardCollection } from './model/card-collection';
import { CardSet } from './model/card-set';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor() { }
}
