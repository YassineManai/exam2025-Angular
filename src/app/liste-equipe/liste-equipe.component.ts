import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';
import { Equipe } from '../models/equipe';

@Component({
  selector: 'app-liste-equipe',
  templateUrl: './liste-equipe.component.html',
  styleUrls: ['./liste-equipe.component.css']
})
export class ListeEquipeComponent implements OnInit {
  equipes: Equipe[] = [];

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.equipeService.getEquipes().subscribe((data: Equipe[]) => {
      this.equipes = data;
    });
  }
}
