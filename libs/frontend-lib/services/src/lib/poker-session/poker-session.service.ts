import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
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
        createdOn: currentTime,
        lastUpdatedOn: currentTime,
      });
    return sessionRef.key;
  }

  joinSession(sessionId: string, userName: string, userRole: UserRole): string {
    const userId = this.db.createPushId();
    this.db
      .object<Participant>(
        `${this.pokerSessionObject}/${sessionId}/participants/${userId}`
      )
      .set({
        name: userName,
        role: userRole,
      });
    return userId;
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
    userId: string,
    vote: number
  ): void {
    this.db
      .object<number>(
        `${this.pokerSessionObject}/${sessionId}/stories/${storyId}/votes/${userId}`
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

  listenToSession(sessionId: string): Observable<PokerSession | null> {
    return this.db.object<PokerSession>(`sessions/${sessionId}`).valueChanges();
  }
}
