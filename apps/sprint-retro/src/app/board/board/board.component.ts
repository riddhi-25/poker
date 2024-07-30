import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { PokerSession } from '@planning-poker-app/types';

interface FormData {
  title: string | null | undefined;
  description: string | null | undefined;
}
@Component({
  selector: 'planning-poker-app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  showForm: Boolean = false;

  getAllSessions!: Record<string, PokerSession>;

  boardActive: Boolean = false;

  formData: FormData[] = [];

  dates : string[]=[];

  constructor(
    private router: Router,
    private retroService: PokerSessionService
  ) {}

  ngOnInit(): void {
    this.retroService.getSessions().subscribe((res) => {
      this.getAllSessions = res;
      console.log('THis is my get all sessions', this.getAllSessions);
      for(const key in this.getAllSessions){
        this.dates.push(this.getAllSessions[key].lastUpdatedOn);
      }
      console.log('This is the dates array', this.dates);
    });
  }

  goToHomeBoardDetails(): void {
    if (!this.showForm) {
      this.showForm = true;
    } else {
      this.showForm = false;
    }

    if (!this.boardActive) {
      this.boardActive = true;
    } else {
      this.boardActive = false;
    }
  }

  getFormValues(formValues: FormData) {
    this.formData.unshift(formValues);
  }

  toggleFormView(formView: Boolean) {
    this.showForm = formView;
  }

  navigateToSession(key: string) {
    console.log('I have navigated', this.dates);
    this.router.navigate(['/home/swimlane', key]);
  }

  sortByDate(){
  }

}
