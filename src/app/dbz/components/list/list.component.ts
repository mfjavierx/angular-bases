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
    { name: 'Trunks', power: 10 }
  ];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    this.onDelete.emit(index);
  }

  deleteCharacterById(id: string): void {
    this.onDeleteById.emit(id);
  }
}
