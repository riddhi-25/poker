import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@planning-poker-app/sprint-retro-auth';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'planning-poker-app-side-bar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  constructor(private router: Router) {}

  items = [
    { name: 'Home', icon: 'home' },
    { name: 'Settings', icon: 'settings' },
  ];

  signout = [{ name: 'Signout', icon: 'logout' }];
  hoverItem: string | null = null;

  logoutUser() {
    localStorage.clear();
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['']);
    }
  }

  onMouseEnter(item: string): void {
    this.hoverItem = item;
  }

  onMouseLeave(): void {
    this.hoverItem = null;
  }

  navigateMe(path: string): void {
    this.router.navigate([`/${path}`]);
  }
}
