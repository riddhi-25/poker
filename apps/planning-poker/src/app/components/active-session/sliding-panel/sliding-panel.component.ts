import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { Issue } from '@planning-poker-app/ui-libs/cards/issue-card';

@Component({
  selector: 'planning-poker-app-sliding-panel',
  templateUrl: './sliding-panel.component.html',
  styleUrls: ['./sliding-panel.component.css'],
})
export class SlidingPanelComponent implements OnInit{
  @Input() isVisible:boolean=false;
  @Output() storyId = new EventEmitter<string>();
  @Output() visibleStatus = new EventEmitter<boolean>();
  @Output() activeIssueIdChanged = new EventEmitter<string>();

  issueTitle = '';
  issueDescription = '';
  formVisible = false;
  issues: Issue[] = []

  constructor(
    private pokerSessionService: PokerSessionService,
    private activatedRoute: ActivatedRoute
  ) {}

  sessionId = this.activatedRoute.snapshot.params['sessionId'];

  ngOnInit(): void{
    this.loadStories();
  }

  loadStories(): void {
    this.pokerSessionService.getSessions().subscribe(res => {
      const stories = res[this.sessionId]?.stories;
      this.issues = stories ? Object.entries(stories).map(([id, story]) => ({ id, ...story })) : [];
    });
  }

  addIssue(): void {
    if (this.issueTitle && this.issueDescription) {
      const storyID = this.pokerSessionService.addStory(
        this.sessionId,
        this.issueTitle,
        this.issueDescription
      );

      this.issueTitle = '';
      this.issueDescription = '';
      this.formVisible = false;
      this.storyId.emit(storyID);
      console.log(`console from addIssue ${storyID}`);
      alert(`Story ID is' ${storyID}`);
      this.loadStories();
    }
  }

  toggleForm(): boolean {
    return (this.formVisible = !this.formVisible);
  }

  togglePanel(): void {
    this.isVisible = !this.isVisible;
    this.visibleStatus.emit(this.isVisible);
  }

  changeStatus(issue:Issue) {

    this.pokerSessionService.activateStory(this.sessionId,issue.id);
    console.log("hiiii",issue.id)
    this.activeIssueIdChanged.emit(issue.title);
  }
}
