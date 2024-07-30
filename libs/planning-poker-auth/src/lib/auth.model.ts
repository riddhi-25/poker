export interface authResponse {
  token: string;
}

export interface User {
  self: string;
  key: string;
  name: string;
  emailAddress: string;
  avatarUrls: Record<AvatarSize, string>;
  displayName: string;
  active: boolean;
  deleted: boolean;
  timeZone: string;
  locale: string;
  groups: any;
  applicationRoles: any;
  expand: string;
}

export type AvatarSize = '16x16' | '24x24' | '32x32' | '48x48';