import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUTTON_TYPE, DISPLAY_TYPE } from './buttonConstant';
// import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'planning-poker-app-button',
  standalone: true,
  imports: [CommonModule, 
    // MatIconModule
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  buttonType = BUTTON_TYPE;
  displayType=DISPLAY_TYPE;

  @Input()
  label: string = '';

  @Input()
  type: string = BUTTON_TYPE.PRIMARY;

  @Input()
  icon!: string;

  @Input()
  display:string=DISPLAY_TYPE.INLINE;

}
