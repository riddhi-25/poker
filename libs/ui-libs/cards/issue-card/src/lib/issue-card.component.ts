import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Issue } from './issue.interface';
import { ButtonComponent } from '@planning-poker-app/ui-libs/button';

@Component({
  selector: 'planning-poker-app-issue-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css'],
})

export class IssueCardComponent implements OnInit {
  @Input() issue!: Issue;
  @Input() finalVote: number | null = null 
  @Output() voteSelected = new EventEmitter<number>();
  @Output() issueTitle = new EventEmitter<string>();
  @Output() statusChange = new EventEmitter<Issue>();
  @Output() storyId=new EventEmitter<string>();
  showDropdown = false;
  fibbonacciNumbers: number[] = [];

  ngOnInit(): void {
    this.fibbonacciNumbers = this.generateFibonacciNumbers(12);
    this.issueTitle.emit(this.issue.title);
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  selectVote(vote: number): void {
    this.finalVote = vote;
    this.voteSelected.emit(vote);
    this.showDropdown = false;
  }

  changeStatus(issueId:string): void{
    this.statusChange.emit(this.issue);
    if(this.issue.status === 'not_started'){
      this.issue.status = 'voting';
      this.statusChange.emit(this.issue);
    }
    else if(this.issue.status === 'voting'){
      this.issue.status = 'not_started';
      this.statusChange.emit(this.issue);
    }
  }

  private generateFibonacciNumbers(count: number): number[] {
    const numbers = [0, 1];
    for (let i = 2; i < count; i++) {
      numbers.push(numbers[i - 1] + numbers[i - 2]);
    }
    return numbers;
  }
}