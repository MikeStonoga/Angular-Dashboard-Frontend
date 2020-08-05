import { Component, Output, EventEmitter } from '@angular/core';
import { DbToolbarService } from './db-toolbar.service';

@Component({
  selector: 'db-toolbar',
  templateUrl: './db-toolbar.component.html',
  styleUrls: ['./db-toolbar.component.css'],
  providers: [DbToolbarService]
})
export class DbToolbarComponent {
  @Output() menuButtonClicked: EventEmitter<void> = new EventEmitter();

  public emitMenuButtonClicked(): void {
    this.menuButtonClicked.emit();
  }
}
