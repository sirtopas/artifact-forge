import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckService } from './services/deck.service';

import { TooltipModule } from 'ngx-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent
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
