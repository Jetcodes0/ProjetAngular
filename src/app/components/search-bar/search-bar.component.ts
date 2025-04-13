import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {


  @Input() search = 'Initial value';

  @Output() searchButtonClicked = new EventEmitter();
  @Output() searchChange = new EventEmitter<string>();

  searchClick(){
    this.searchButtonClicked.emit();
  }
  updateSearch(value: string) {
    this.searchChange.emit(value);
  }
}
