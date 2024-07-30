import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteState, VOTE_STATE } from './vote.model';

@Component({
  selector: 'planning-poker-app-vote-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.css'],
})

export class VoteCardComponent {
  voteState = VOTE_STATE;

  @Input()
  inputNum: number = 0;

  @Input()
  state: string = VOTE_STATE.VOTING;

  @Output()
  stateChanged = new EventEmitter<VoteState>();

  sendState(inputNum: number, state: string): void {
    const voteStateChanged: VoteState = {
      num: inputNum,
      currentState: state
    }
    this.stateChanged.emit(voteStateChanged);
  }
}

