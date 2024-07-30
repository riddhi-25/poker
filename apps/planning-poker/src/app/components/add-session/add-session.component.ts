import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'planning-poker-app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css'],
})
export class AddSessionComponent {
  constructor(private pokerSession: PokerSessionService, private router:Router, private sharedService:SharedServiceService) { }

  sessionForm = new FormGroup({
    sessionName: new FormControl('', Validators.required),
    sessionDescription: new FormControl('', Validators.required)
  })

  newSession(event: Event): void {
    event.preventDefault();
    if (this.sessionForm.valid) {
      const sessionName = this.sessionForm.get('sessionName')?.value as string;
      const sessionDescription = this.sessionForm.get('sessionDescription')?.value as string;
      const sessionId = this.pokerSession.createSession(sessionName, sessionDescription) as string;
      this.sharedService.setActiveSessionId(sessionId);
      this.router.navigate([`/session/${sessionId}`])
    } else {  
      alert('Form is not valid');
  }
}
}
