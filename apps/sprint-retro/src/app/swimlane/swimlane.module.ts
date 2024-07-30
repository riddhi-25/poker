import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwimlaneSectionComponent } from './swimlaneSection/swimlane-section.component';
import { SwimlaneComponent } from '@planning-poker-app/ui-libs/swimlanes-section';
import { SwimlaneHeaderComponent } from '../header/swimlaneHeader/swimlane-header.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SwimlaneSectionComponent, SwimlaneHeaderComponent],
  imports: [CommonModule, SwimlaneComponent, MatIconModule, ReactiveFormsModule],
})
export class SwimlaneModule {}
