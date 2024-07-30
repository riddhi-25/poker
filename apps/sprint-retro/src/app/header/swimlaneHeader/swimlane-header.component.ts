import { Component, Input } from '@angular/core';
import { AuthService } from '@planning-poker-app/sprint-retro-auth';
import { User } from '@planning-poker-app/sprint-retro-auth';
import { ShareFormDataService } from '../../board/services/share-form-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PokerSession, UserRole, UserStory } from '@planning-poker-app/types';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface FormData {
  title: string | null | undefined;
  description: string | null | undefined;
}
@Component({
  selector: 'planning-poker-app-swimlane-header',
  templateUrl: './swimlane-header.component.html',
  styleUrls: ['./swimlane-header.component.css'],
})
export class SwimlaneHeaderComponent {
  @Input() title!: string;
  @Input() description!: string | undefined;

  showForm : boolean = false;

  sessionId!: string;

  user!: User;

  formValues!: FormData;

  

  getAllSessions!: Record<string, PokerSession>;

  showParticipant: boolean = false;

  

  constructor(
    private auth: AuthService,
    private formData: ShareFormDataService,
    private route: ActivatedRoute,
    private retroService: PokerSessionService,
    private router: Router
  ) {}

  hoverItem: string | null | undefined = null;

  onMouseEnter(item: string | null | undefined) {
    this.hoverItem = item;
  }

  onMouseLeave() {
    this.hoverItem = null;
  }

  ngOnInit() {
    this.auth.getUser().subscribe((res: User) => {
      this.user = res;
      console.log(this.user);
    });

    this.formData.getFormValues().subscribe((res) => {
      this.formValues = res;
    });

    this.route.paramMap.subscribe((params) => {
      this.sessionId = params.get('sessionId') as string;
    });

    this.retroService.getSessions().subscribe((res) => {
      this.getAllSessions = res;
    });
  }

 

  toggleFormView(){
    this.router.navigate(['/joiningForm']);
  }

  showParticipantsList() {
    this.showParticipant = !this.showParticipant;
  }
}
