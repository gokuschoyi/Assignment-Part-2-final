import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-opponent-game',
  templateUrl: './opponent-game.component.html',
  styleUrls: ['./opponent-game.component.scss']
})
export class OpponentGameComponent implements OnInit {

  constructor(public teamsService: TeamsService) { }

  ngOnInit(): void {
  }

}
