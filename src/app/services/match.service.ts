import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl = 'http://localhost:3000/matches'; 

  constructor(private http: HttpClient) { }

  addMatch(match: Match): Observable<Match> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Match>(this.apiUrl, match, { headers });
  }
}
