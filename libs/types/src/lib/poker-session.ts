export interface PokerSession {
  id?: string;
  name: string;
  description?: string;
  createdOn: string;
  lastUpdatedOn: string;
  status: PokerSessionStatus;
  participants: Record<string, Participant> | null;
  stories: Record<string, UserStory> | null;
}

export type PokerSessionStatus = 'active' | 'completed'

export type UserRole = 'Developer' | 'Lead' | 'Scrum Master';

export interface Participant {
  id?: string;
  name: string;
  role: UserRole;
}

export interface UserStory {
  id?: string;
  key?: string;
  title: string;
  description: string;
  status: UserStoryStatus;
  votes: Record<string, number> | null;
}

export type UserStoryStatus = 'not_started' | 'voting' | 'revealed';
