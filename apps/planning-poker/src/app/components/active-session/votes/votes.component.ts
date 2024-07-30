import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { AuthService, User } from '@planning-poker-app/planning-poker-auth';
import { PokerSession } from '@planning-poker-app/types';
import { VOTE_STATE, VoteState } from 'libs/ui-libs/cards/vote-card/src/lib/vote.model';


@Component({
  selector: 'planning-poker-app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
})
export class VotesComponent implements OnInit {
  constructor(private pokerService: PokerSessionService, private activatedRoute: ActivatedRoute,
    private authService:AuthService
  ) { }
  fibonacciList: number[] = [];
  state: Map<number, string> = new Map();
  finalNum: number = 0;
  currentSession: PokerSession | null = null;
  currentStoryId:string='';
  loggedInUser: string ='';
  @Output() sendState=new EventEmitter<VoteState>()

  ngOnInit(): void {
    this.setFibonacci();
    this.authService.getCurrentUser().subscribe((user:User) => {
      this.loggedInUser = user.displayName;
    });
  }

  changeState(newState: VoteState): void {
   
    this.finalNum = newState.num;
    this.state.forEach((value, key) => {
      this.state.set(key, VOTE_STATE.VOTING);
    });
    if (this.state.get(newState.num) === VOTE_STATE.VOTING) {
      this.state.set(newState.num, VOTE_STATE.VOTED);
    }
    this.finalVote();
    this.sendState.emit(newState);
  }

  finalVote() :void{
    const activeSessionId = this.activatedRoute.snapshot.params['sessionId'];
    this.pokerService.listenToSession(activeSessionId).subscribe((res) => {
      this.currentSession = res;
      Object.entries(this.currentSession?.stories||{}).forEach(([key,story])=>{
        if(story.status==='voting'){
          this.currentStoryId=key;
        }
      })
      })
      this.pokerService.submitVote(activeSessionId, this.currentStoryId,this.loggedInUser , this.finalNum)
  }

  setFibonacci(): void {
    this.fibonacciList = [1, 2];
    this.state.set(1, VOTE_STATE.VOTING);
    this.state.set(2, VOTE_STATE.VOTING);
    let i = 2;
    while (this.fibonacciList[i - 1] < 89) {
      this.fibonacciList[i] =
        this.fibonacciList[i - 1] + this.fibonacciList[i - 2];
      this.state.set(this.fibonacciList[i], VOTE_STATE.VOTING);
      i++;
    }
  }
}