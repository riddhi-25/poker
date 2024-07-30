import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '@planning-poker-app/sprint-retro-auth';
import { User } from '@planning-poker-app/sprint-retro-auth';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'planning-poker-app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css'],
})
export class HomeHeaderComponent {

  @Output() clickSort = new EventEmitter<void>();

  user!: User;

  hoverItem: string | null = null;

  constructor(private authService: AuthService, private http: HttpClient) {}
  ngOnInit() {
    this.authService.getUser().subscribe((res: User) => {
      this.user = res;
    });
  }

  onMouseEnter(item: string): void {
    this.hoverItem = item;
  }

  onMouseLeave(): void {
    this.hoverItem = null;
  }

  sortClick():void{
    this.clickSort.emit();
  }

}
