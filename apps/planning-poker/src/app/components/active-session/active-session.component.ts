import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { Participant, PokerSession, UserStory, UserStoryStatus } from '@planning-poker-app/types';
import { VOTE_STATE, VoteState } from '@planning-poker-app/ui-libs/cards/vote-card';

@Component({
  selector: 'planning-poker-app-active-session',
  templateUrl: './active-session.component.html',
  styleUrls: ['./active-session.component.css'],
})
export class ActiveSessionComponent implements OnInit {
  activeSessionId = this.activatedRoute.snapshot.params['sessionId'];
  storyID = '';
  activeStory: UserStory | null = null;
  storyState: string='hide';
  userNum = 0;
  userState = VOTE_STATE.REVEALED;
  session: PokerSession | null = null;
  panelVisible = false;
  userList: Participant[] = [];
  buttonVote: string = 'Select your vote!';
  timerState:string='notStarted';

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokerSessionService: PokerSessionService
  ) { }

  ngOnInit(): void {
    console.log(this.timerState)
    this.pokerSessionService.listenToSession(this.activeSessionId).subscribe({
      next: pokersession => {
        this.session = pokersession;
        this.userList = Object.values(this.session?.participants || {});
        console.log(this.session);
          Object.entries(this.session?.stories || {}).forEach(([key, story]) => {
            if (story.status === 'voting' || story.status === 'revealed') {
              this.storyID = key;
              this.activeStory = story;
              console.log("active:",this.activeStory)
              if (story.status === 'voting') {
                // this.storyState = 'revealed';
              } else if (story.status === 'revealed') {
                // this.storyState = 'voting';
              }
            }
          });  
      }
    });
  }
  reveal(): void {
    if(this.buttonVote==='Reveal Votes'){
      this.pokerSessionService.revealVotes(this.activeSessionId, this.storyID);
      this.storyState='voting';  
    }
  }
  changeState(newState: VoteState) {
    if(newState.currentState===VOTE_STATE.VOTING){
      this.buttonVote='Reveal Votes';
      this.storyState='revealed'
    }
  }

  handleTimerEvent(timer:string):void{

this.timerState=timer;
  }
}