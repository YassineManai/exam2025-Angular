import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeEquipeComponent } from './liste-equipe/liste-equipe.component';
import { ListeMatchsComponent } from './liste-matchs/liste-matchs.component';
import { MatchComponent } from './match/match.component';
import { FooterComponent } from './footer/footer.component';
import { MatchService } from './services/match.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListeEquipeComponent,
    ListeMatchsComponent,
    MatchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
