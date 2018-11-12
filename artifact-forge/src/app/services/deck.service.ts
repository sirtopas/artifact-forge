import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Cdn } from '../model/cdn';
import { CardCollection } from '../model/card-collection';

@Injectable()
export class DeckService {
    constructor(private http: HttpClient) { }

    getCardsetInformation(set: string): Observable<Cdn> {
        return this.http.get<Cdn>(environment.apiUrl + 'cardset/GetCardsetInformation?deckType=' + set);
    }

    getAllCards(cdn: Cdn): Observable<any> {
        return this.http.post<CardCollection>(environment.apiUrl + 'cardset/GetDeckFromCdn', cdn);
    }
}
