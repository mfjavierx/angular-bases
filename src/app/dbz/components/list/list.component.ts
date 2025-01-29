import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    { id: '', name: 'Trunks', power: 10 }
  ];

  @Output()
  public onEventDeleteCharacter: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id: string): void {
    this.onEventDeleteCharacter.emit(id);
  }
}
