import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  monster: InputSignal<Monster> =  input(new Monster(),{
    alias: 'my-monster',
    transform: (value: Monster) => {
      value.hp =  value.hp / 2; // Example transformation: increase hp by 10
      return value;
    }
  });

 

}
