import { Component, Input, OnInit } from '@angular/core';
import { Participant, PokerSession } from '@planning-poker-app/types';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'planning-poker-app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css'],
})
export class SubHeaderComponent implements OnInit {
  currentSession: PokerSession | null = null;
  userList: Participant[] = [];
  activeSessionId: string = '';
  showList: boolean = false;
  panelVisible = false; 
  issueTitle:string='';
  joinSession:string='';

  constructor(
    private pokerSession: PokerSessionService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeSessionId = this.activatedRoute.snapshot.params['sessionId'];
    this.pokerSession.listenToSession(this.activeSessionId).subscribe((res) => {
      this.currentSession = res;
      this.userList=Object.values(this.currentSession?.participants || {});
    })
  }

  getUsers() { }

  togglePanel(): void {
    this.panelVisible = !this.panelVisible;
  }

  onActiveIssueIdChanged(activeIssueId: string) {
    this.issueTitle=activeIssueId;
  }
  // getStoryId(storyId: string):void{
  //   this.storyID = storyId;
  //   console.log('console from getStoryId', this.storyID);
  // }
  
  shareLink(){
    this.joinSession=`http://localhost:4200/session/${this.activeSessionId}`;
  }
}
