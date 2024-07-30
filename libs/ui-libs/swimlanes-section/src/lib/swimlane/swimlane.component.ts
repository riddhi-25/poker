import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FeedbackCardComponent } from 'libs/ui-libs/cards/retro-card/src/lib/feedback-card/feedback-card.component';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { FeedbackType, PokerSession } from '@planning-poker-app/types';
import { AuthService, User } from '@planning-poker-app/sprint-retro-auth';

export interface Color {
  name: string;
  hexCode: string;
}

export interface Card {
  title: string;
  addColor: string;
}

@Component({
  selector: 'planning-poker-app-swimlane',
  standalone: true,
  imports: [CommonModule, FeedbackCardComponent, FormsModule],
  templateUrl: './swimlane.component.html',
})
export class SwimlaneComponent {
  feedbackID!: string;

  @Input() type!: FeedbackType;

  user!: User;
  sessionId: string = '';
  storyId: string = '';
  getAllSessions!: Record<string, PokerSession>;

  constructor(
    private router: ActivatedRoute,
    private retroService: PokerSessionService,
    private authService: AuthService
  ) {}

  cardInput: string = '';

  cards: Card[] = [];

  colorName: Color[] = [
    { name: 'PaleVioletRed', hexCode: '#DB7093' },
    { name: 'White', hexCode: '#F8EDED' },
    { name: 'Grey', hexCode: '#758694' },
    { name: 'Lavender', hexCode: '#E6E6FA' },
    { name: 'Orchid', hexCode: '#DA70D6' },
    { name: 'LightSalmon', hexCode: '#FFA07A' },
    { name: 'BurlyWood', hexCode: '#DEB887' },
    { name: 'Wheat', hexCode: '#F5DEB3' },
    { name: 'Coral', hexCode: '#FF7F50' },
    { name: 'Pink', hexCode: '#FFC0CB' },
  ];

  selectedColor: string = '';

  likeCounts: number = 0;

  dislikeCounts: number = 0;

  checkLikes: boolean[] = [];

  checkDislikes: boolean[] = [];

  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      this.sessionId = params.get('sessionId') as string;
    });

    this.authService.getUser().subscribe((res) => {
      this.user = res;
    });

    this.retroService.getSessions().subscribe((res) => {
      this.getAllSessions = res;
    });
  }

  // addCard(): void {
  //   if (this.cardInput.trim()) {
  //     this.cards.unshift({
  //       title: this.cardInput,
  //       addColor: this.selectedColor,
  //     });
  //     this.storyId = this.retroService.addStory(
  //       this.sessionId,
  //       this.cardInput,
  //       'this is a card'
  //     );

  //     this.cardInput = '';
  //     this.likeCounts.unshift(0);
  //     this.dislikeCounts.unshift(0);
  //     this.checkLikes.unshift(false);
  //     this.checkDislikes.unshift(false);
  //     console.log(this.selectedColor);

  //     this.retroService.getSessions().subscribe((res) => {
  //       this.getAllSessions = res;
  //     });
  //   }
  // }

  onColorSelect(colorHex: string): void {
    this.selectedColor = colorHex;
  }

  // likeCard(cardIndex: number): void {
  //   if (!this.checkLikes[cardIndex]) {
  //     this.likeCounts[cardIndex]++;
  //     this.checkLikes[cardIndex] = true;
  //   } else {
  //     this.likeCounts[cardIndex]--;
  //     this.checkLikes[cardIndex] = false;
  //   }
  // }

  // dislikeCard(cardIndex: number): void {
  //   if (!this.checkDislikes[cardIndex]) {
  //     this.dislikeCounts[cardIndex]++;
  //     this.checkDislikes[cardIndex] = true;
  //   } else {
  //     this.dislikeCounts[cardIndex]--;
  //     this.checkDislikes[cardIndex] = false;
  //   }
  // }

  addCard(): void {
    this.feedbackID = this.retroService.addFeedback(
      this.sessionId,
      this.user.displayName,
      this.cardInput,
      this.selectedColor,
      this.type
    );
  }

  updateLike(idFeedback: string): void {
    console.log('This is like', idFeedback);
    const myFeedback = this.getAllSessions[this.sessionId].feedbacks;
    console.log('THis is  my feedback', myFeedback);
    if (myFeedback) {
      this.likeCounts = myFeedback[idFeedback].likeCount;
    }

    this.retroService.likeFeedback(this.sessionId, idFeedback, this.likeCounts);
  }

  updateDislike(idFeedback: string): void {
    const myFeedback = this.getAllSessions[this.sessionId].feedbacks;
    if (myFeedback) {
      this.dislikeCounts = myFeedback[idFeedback].dislikeCount;
    }
    this.dislikeCounts;
    this.retroService.dislikeFeedback(
      this.sessionId,
      idFeedback,
      this.dislikeCounts
    );
  }
}
