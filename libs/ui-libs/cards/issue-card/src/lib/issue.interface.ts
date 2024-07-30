export interface Issue {
    id: string;
    title: string;
    description: string;
    status: 'not_started' | 'voting' | 'revealed';
    votes: Record<string, number> | null;
}  