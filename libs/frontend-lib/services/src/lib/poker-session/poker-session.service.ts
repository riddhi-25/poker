import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
  Feedback,
  FeedbackType,
  Participant,
  PokerSession,
  UserRole,
  UserStory,
} from '@planning-poker-app/types';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokerSessionService {
  private pokerSessionObject = 'planning-poker/session';

  constructor(private db: AngularFireDatabase) {}

  getSessions(): Observable<Record<string, PokerSession>> {
    return this.db
      .object<Record<string, PokerSession>>(this.pokerSessionObject)
      .valueChanges()
      .pipe(
        map(pokerSessionsMap => pokerSessionsMap || {})
      );
  }

  createSession(name: string, description: string): string | null {
    const currentTime = new Date().toISOString();
    const sessionRef = this.db
      .list<PokerSession>(this.pokerSessionObject)
      .push({
        name,
        description,
        status: 'active',
        participants: null,
        stories: null,
        feedbacks: null,
        createdOn: currentTime,
        lastUpdatedOn: currentTime,
      });
    return sessionRef.key;
  }

  joinSession(sessionId: string, userName: string, userRole: UserRole,): boolean {
      this.db
      .object<Participant>(
        `${this.pokerSessionObject}/${sessionId}/participants/${userName}`
      )
      .set({
        name: userName,
        role: userRole,
      });
   return true
  }

  addStory(sessionId: string, title: string, description: string): string {
    const storyId = this.db.createPushId();
    this.db
      .object<UserStory>(
        `${this.pokerSessionObject}/${sessionId}/stories/${storyId}`
      )
      .set({
        title,
        description,
        status: 'not_started',
        votes: {},
      });
    return storyId;
  }

  submitVote(
    sessionId: string,
    storyId: string,
    userName: string,
    vote: number
  ): void {
    this.db
      .object<number>(
        `${this.pokerSessionObject}/${sessionId}/stories/${storyId}/votes/${userName}`
      )
      .set(vote);
  }

  revealVotes(sessionId: string, storyId: string): void {
    this.db
      .object<Partial<UserStory>>(
        `${this.pokerSessionObject}/${sessionId}/stories/${storyId}`
      )
      .update({ status: 'revealed' });
  }

  addFeedback(sessionId: string, username: string, message: string, bgColor: string, type: FeedbackType): string {
    const feedbackId = this.db.createPushId();
    this.db
      .object<Feedback>(
        `${this.pokerSessionObject}/${sessionId}/feedbacks/${feedbackId}`
      )
      .set({
        username,
        message,
        bgColor,
        likeCount: 0,
        dislikeCount: 0,
        type
      });
    return feedbackId;
  }

  likeFeedback(sessionId: string, feedbackId: string, likeCount: number): void {
    this.db
      .object<Feedback>(
        `${this.pokerSessionObject}/${sessionId}/feedbacks/${feedbackId}`
      )
      .update({
        likeCount: ++likeCount,
      });
  }

  dislikeFeedback(sessionId: string, feedbackId: string, dislikeCount: number): void {
    this.db
      .object<Feedback>(
        `${this.pokerSessionObject}/${sessionId}/feedbacks/${feedbackId}`
      )
      .update({
        dislikeCount: ++dislikeCount,
      });
  }

  activateStory(sessionId: string, storyId: string): void {
    this.db
      .object<Partial<UserStory>>(
        `${this.pokerSessionObject}/${sessionId}/stories/${storyId}`
      )
      .update({ status: 'voting' });
      
  }


  // deactivateStories(sessionId: string): void {
  //   this.db
  //     .object<Partial<UserStory>>(
  //       `${this.pokerSessionObject}/${sessionId}/stories}`
  //     ).
  //     .update({ status: 'voting' });
  // }

  listenToSession(sessionId: string): Observable<PokerSession | null> {
    return this.db.object<PokerSession>(`${this.pokerSessionObject}/${sessionId}`).valueChanges();
  }
}
