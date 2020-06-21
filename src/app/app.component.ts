import { Component } from '@angular/core';
import { GameService } from './core/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private gameService: GameService) {}
}
