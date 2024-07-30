export interface JiraQuery {
  apiUrl: string;
  method: QueryType;
  body?: JSON;
  queryParams?: string;
}

export type QueryType = 'Get' | 'Post' | 'Put' | 'Patch' | 'Delete';
