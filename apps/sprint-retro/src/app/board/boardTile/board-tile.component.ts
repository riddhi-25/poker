import { Component, Input } from '@angular/core';

@Component({
  selector: 'planning-poker-app-board-tile',
  templateUrl: './board-tile.component.html',
  styleUrls: ['./board-tile.component.css'],
})
export class BoardTileComponent {
  @Input() title!: string | null | undefined;
  @Input() description!: string | null | undefined;
  @Input() createdOn!: string | null | undefined;
  @Input() sessionId!: string;
}
