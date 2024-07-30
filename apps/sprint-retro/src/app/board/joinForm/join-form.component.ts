import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { UserRole } from '@planning-poker-app/types';

@Component({
  selector: 'planning-poker-app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.css'],
})
export class JoinFormComponent {

  userId!: string;

  constructor(private retroService: PokerSessionService,
    private router: Router
  ){}

  joinUser = new FormGroup({
    sessionId: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    role : new FormControl('', Validators.required)
})

  onSubmit(){
    const sessionId = this.joinUser.get('sessionId')?.value as string;
    const userName = this.joinUser.get('userName')?.value as string;
    const role = this.joinUser.get('role')?.value as UserRole;
    this.userId = this.retroService.joinSession(sessionId, userName, role);
    if(this.userId){
      this.router.navigate(['/home/swimlane', sessionId]);
    }
  }
}
