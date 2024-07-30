import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareFormDataService } from '../services/share-form-data.service';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';

interface board {
  title: string | null | undefined;
  description: string | null | undefined;
}

@Component({
  selector: 'planning-poker-app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css'],
})
export class BoardFormComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() showForm!: Boolean;

  @Output() formValues = new EventEmitter<{
    title: string | null | undefined;
    description: string | null | undefined;
  }>();

  @Output() toggleView = new EventEmitter<Boolean>();

  boards: board[] = [];

  sessionId: string = '';

  boardForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private boardFormService: ShareFormDataService,
    private retroService: PokerSessionService
  ) {}

  onSubmit() {
    if (this.boardForm.valid) {
      const title = this.boardForm.get('title')?.value as string;
      const description = this.boardForm.get('description')?.value as string;

      this.boards.unshift({ title: title, description: description });
      if (!this.showForm) {
        this.showForm = true;
      } else {
        this.showForm = false;
      }

      this.formValues.emit({ title, description });

      this.toggleView.emit(this.showForm);

      this.sessionId = this.retroService.createSession(
        title,
        description
      ) as string;

      this.boardFormService.setFormValues({ title, description });

      this.router.navigate(['/home/swimlane', this.sessionId]);
    } else {
      this.boardForm.markAllAsTouched();
      return;
    }
  }

  get titleControl() {
    return this.boardForm.get('title');
  }

  get descriptionControl() {
    return this.boardForm.get('description');
  }
}
