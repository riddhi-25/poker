import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'planning-poker-app-feedback-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './feedback-card.component.html',
})
export class FeedbackCardComponent {
  @Input() title: string = '';
  @Input() colorTaker: string = 'White';
  @Input() likeCount!: number;
  @Input() dislikeCount!: number;
  @Input() cardIndex: number = 0;
  @Input() author : string = '';

  @Output() likeClicked = new EventEmitter<void>();

  @Output() dislikeClicked = new EventEmitter<void>();

  chatActive: Boolean = false;
  likeActive: Boolean = false;
  dislikeActive: Boolean = false;

  toggleComment(): void {
    if (!this.chatActive) {
      this.chatActive = true;
    } else {
      this.chatActive = false;
    }
  }

  likeClick(): void {
    if (!this.likeActive) {
      this.likeActive = true;
    } else {
      this.likeActive = false;
    }
    this.likeClicked.emit();
  }

  dislikeClick(): void {
    if (!this.dislikeActive) {
      this.dislikeActive = true;
    } else {
      this.dislikeActive = false;
    }
    this.dislikeClicked.emit();
  }
}
