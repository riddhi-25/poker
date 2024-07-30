import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@planning-poker-app/planning-poker-auth';
import { User } from '@planning-poker-app/planning-poker-auth';

@Component({
  selector: 'planning-poker-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser: string | null = '';
  currentUser: User | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      this.loggedInUser = user.displayName;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  routeToHome(): void {
    this.router.navigate(['home']);
  }

  routeToSessionsHistory(): void {
    this.router.navigate(['sessionshistory'])
  }
}
