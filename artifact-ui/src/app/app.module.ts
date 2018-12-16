import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DeckService } from './services/deck.service';

import { TooltipModule } from 'ngx-bootstrap';
import { SpellsComponent } from './spells/spells.component';
import { CreepsComponent } from './creeps/creeps.component';
import { AbilitiesComponent } from './abilities/abilities.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        SpellsComponent,
        CreepsComponent,
        AbilitiesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TooltipModule.forRoot()
    ],
    providers: [
        DeckService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
