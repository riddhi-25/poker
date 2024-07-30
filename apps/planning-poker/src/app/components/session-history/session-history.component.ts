import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { PokerSession } from '@planning-poker-app/types';

@Component({
  selector: 'planning-poker-app-session-history',
  templateUrl: './session-history.component.html',
  styleUrls: ['./session-history.component.css'],
})
export class SessionHistoryComponent implements OnInit {
  sessions: Record<string, PokerSession> = {};
  selectedId: string | null = '';

  constructor(private pokerSessionService: PokerSessionService, private router: Router) {}

  ngOnInit(): void {
    this.pokerSessionService.getSessions().subscribe((res)=>{
      console.log(res);
      this.sessions = res;
    })
  }

  toggleDetails(sessionId: string): void {
    if(this.selectedId === sessionId) {
      this.selectedId = null;
    }
    else {
      this.selectedId = sessionId;
    }
  }

  viewSession(sessionId: string): void {
    this.router.navigate([`/session/${sessionId}`])
  }

}
