import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { HomeHeaderComponent } from '../header/homeHeader/home-header.component';
import { BoardFormComponent } from './boardForm/board-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardTileComponent } from './boardTile/board-tile.component';
import { MatIconModule } from '@angular/material/icon';
import { JoinFormComponent } from './joinForm/join-form.component';
@NgModule({
  declarations: [
    BoardComponent,
    HomeHeaderComponent,
    BoardFormComponent,
    BoardTileComponent,
    JoinFormComponent
  ],
  imports: [MatIconModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class BoardModule {}
