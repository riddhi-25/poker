import { Component, OnInit } from '@angular/core';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { FeedbackType, PokerSession } from '@planning-poker-app/types';
import { ShareFormDataService } from '../../board/services/share-form-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'planning-poker-app-swimlane-section',
  templateUrl: './swimlane-section.component.html',
  styleUrls: ['./swimlane-section.component.css'],
})
export class SwimlaneSectionComponent implements OnInit {

  good : FeedbackType  = 'good';
  bad : FeedbackType = 'bad';
  action : FeedbackType = 'action';

  
  allRetroSession: Record<string, PokerSession> = {};

  retroSession!: PokerSession | null;

  sessionId: string = '';

  title!: string;

  description!: string;

  constructor(
    private retroService: PokerSessionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.sessionId = params.get('sessionId') as string;
    });

    console.log(this.sessionId);

    this.retroService.getSessions().subscribe((res) => {
      this.allRetroSession = res;
      console.log(this.allRetroSession);
    });
  }
}
