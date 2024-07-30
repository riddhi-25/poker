import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { AuthService, User } from '@planning-poker-app/planning-poker-auth';
import { UserRole } from '@planning-poker-app/types';

@Component({
  selector: 'planning-poker-app-join-session',
  templateUrl: './join-session.component.html',
  styleUrls: ['./join-session.component.css'],
})
export class JoinSessionComponent implements OnInit{
  roleList: UserRole[] = ['Developer', 'Lead', 'Scrum Master'];
  constructor(private pokerService: PokerSessionService, private router: Router,
   private authService:AuthService
  ) { }

  loggedInUser:string='';
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user:User) => {
      this.loggedInUser = user.displayName;
    });
  }
  joinSessionForm = new FormGroup({
    inputSessionId: new FormControl('', Validators.required),
    userRole: new FormControl('', Validators.required),
  })

  joinSession(event:Event): void {
    event.preventDefault();
    console.log(this.joinSessionForm.value);
    const sessionId=this.joinSessionForm.get('inputSessionId')?.value as string;

    const userRole=this.joinSessionForm.get('userRole')?.value as UserRole;

    const result= this.pokerService.joinSession(sessionId, this.loggedInUser,userRole);
    if(result){
      this.router.navigate([`/session/${sessionId}`])
    }
    
  }
}
