import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-team-win-predict',
  templateUrl: './team-win-predict.component.html',
  styleUrls: ['./team-win-predict.component.scss']
})
export class TeamWinPredictComponent implements OnInit {

  constructor(public teamsService: TeamsService) { }

  ngOnInit(): void {
  }

}
