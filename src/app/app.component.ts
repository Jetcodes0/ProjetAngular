import { Component } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardComponent, SearchBarComponent]

  
})
export class AppComponent {
  monster1!: Monster;
  count: number = 0;
  search = ''

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = "Goblin";
    this.monster1.hp = 50;
    this.monster1.figurecaption = "Goblin";
    this.monster1.attackName = "Slash";
    this.monster1.attackStrength = 10;
    this.monster1.attackDescription = "The goblin slashes at you with its dagger!";
  }

  increaseCount() {
    this.count++;
  }


}
