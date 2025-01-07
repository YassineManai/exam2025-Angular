import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEquipeComponent } from './liste-equipe/liste-equipe.component';
import { ListeMatchsComponent } from './liste-matchs/liste-matchs.component';
import { MatchComponent } from './match/match.component';

const routes: Routes = [
  { path: 'liste-equipe', component: ListeEquipeComponent },
  { path: 'liste-matches', component: ListeMatchsComponent },
  { path: 'ajouter-match', component: MatchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
