import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SpellsComponent } from './spells/spells.component';
import { CreepsComponent } from './creeps/creeps.component';
import { AbilitiesComponent } from './abilities/abilities.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'heroes', component: HeroesComponent },
            { path: 'spells', component: SpellsComponent },
            { path: 'creeps', component: CreepsComponent },
            { path: 'abilities', component: AbilitiesComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
