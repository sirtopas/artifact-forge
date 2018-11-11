import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Cdn } from '../model/cdn';
import { Card } from '../model/card';
import { CardSet } from '../model/card-set';

@Injectable()
export class DeckService {
    constructor(private http: HttpClient) { }

    getCardsetInformation(): Observable<Cdn> {
        return this.http.get<Cdn>(environment.apiUrl + 'cardset/GetCardsetInformation?deckType=01');
    }

    getAllCards(cdn: Cdn): Observable<CardSet> {
        return this.http.post<CardSet>(environment.apiUrl + 'cardset/GetDeckFromCdn', cdn);
    }
}
