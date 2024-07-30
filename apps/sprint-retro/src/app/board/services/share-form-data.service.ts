import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Board {
  title: string | null | undefined;
  description: string | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class ShareFormDataService {
  private formValueSubject = new BehaviorSubject<Board>({
    title: null,
    description: null,
  });

  setFormValues(values: Board) {
    this.formValueSubject.next(values);
  }

  getFormValues() {
    return this.formValueSubject.asObservable();
  }
}
