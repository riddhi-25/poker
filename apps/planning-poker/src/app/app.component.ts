import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from '@planning-poker-app/ui-libs/cards/issue-card';

@Component({
  selector: 'planning-poker-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  footerRoutes: string[] = ['/home']
  headerRoutes: string[] = ['/home', 'home/sessionshistory', '/addsession']

  title = 'planning-poker';
  issues: Issue[] = [
    // { id: 'PP-1', title: 'Issue 1', description: 'This is an issue', status: 'voting', votes: 13 },
    // { id: 'PP-2', title: 'Issue 2', description: 'Another issue', status: 'not_started', votes: 0 },
  ];
  constructor(private router: Router){}
  footer(): boolean {
    return this.footerRoutes.includes(this.router.url);
  }
  header(): boolean {
    return this.headerRoutes.includes(this.router.url);
  }
}
