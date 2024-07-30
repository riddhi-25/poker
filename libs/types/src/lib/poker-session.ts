export interface PokerSession {
  id?: string;
  name: string;
  description?: string;
  createdOn: string;
  lastUpdatedOn: string;
  status: PokerSessionStatus;
  participants: Record<string, Participant> | null;
  stories: Record<string, UserStory> | null;
  feedbacks: Record<string, Feedback> | null;
}

export type PokerSessionStatus = 'active' | 'completed'

export type UserRole = 'Developer' | 'Lead' | 'Scrum Master';

export type FeedbackType = 'good' | 'bad' | 'action';

export interface Feedback {
  username: string;
  message: string;
  bgColor: string;
  likeCount: number;
  dislikeCount: number;
  type: FeedbackType;
}

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
