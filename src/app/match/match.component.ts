import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';
import { MatchService } from '../services/match.service';
import { Equipe } from '../models/equipe';
import { Match } from '../models/match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  equipes: Equipe[] = [];
  equipeA: string = '';
  equipeB: string = '';
  date: string = '';
  heure: string = '';
  lien: string = '';
  errorMessage: string = '';

  constructor(private equipeService: EquipeService, private matchService: MatchService) { }

  ngOnInit(): void {
    this.equipeService.getEquipes().subscribe((data: Equipe[]) => {
      this.equipes = data;
    });
  }

  onSubmit() {
    this.errorMessage = '';

    const today = new Date().toISOString().split('T')[0];
    if (this.date < today) {
      this.errorMessage = 'La date doit être supérieure ou égale à la date d\'aujourd\'hui';
      return;
    }

    if (this.equipeA === this.equipeB) {
      this.errorMessage = 'Il faut choisir deux équipes différentes';
      return;
    }

    const equipeAObj = this.equipes.find(equipe => equipe.nom === this.equipeA);
    const equipeBObj = this.equipes.find(equipe => equipe.nom === this.equipeB);

    if (equipeAObj?.natif !== equipeBObj?.natif) {
      this.errorMessage = 'Les équipes doivent être du même natif';
      return;
    }

    const newMatch: Match = {
      equipeA: this.equipeA,
      equipeB: this.equipeB,
      date: this.date,
      heure: this.heure,
      lien: this.lien
    };

    this.matchService.addMatch(newMatch).subscribe((match: Match) => {
      console.log('Match enregistré:', match);
    });
  }
}
