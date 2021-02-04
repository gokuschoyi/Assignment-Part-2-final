import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Team } from '../models/team.model';
import { ApiConstant } from '../shared/api-constants';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  public selectedTeam: Team | undefined;

  constructor(private http: HttpClient) { }

  getTeams(): Observable<{teams: Team[]}> {
    return this.http.get<{teams: Team[]}>(ApiConstant.apiBaseUrl + `?q=teams`).pipe(
      // tslint:disable-next-line: no-string-literal
      map(data => data)
    );
  }
}