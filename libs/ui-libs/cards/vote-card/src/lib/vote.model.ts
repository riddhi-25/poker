export const VOTE_STATE = {
    VOTING: 'voting',
    VOTED: 'voted',
    REVEALED: 'revealed',
    HIDE: 'hide'
} as const

export interface VoteState{
    num: number;
    currentState: string;
}