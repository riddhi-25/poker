import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SideBarComponent } from '@planning-poker-app/ui-libs/side-nav-bar';
import { RouterModule, Routes } from '@angular/router';
import { SwimlaneSectionComponent } from '../swimlane/swimlaneSection/swimlane-section.component';
import { BoardComponent } from '../board/board/board.component';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent,
  },
  {
    path: 'swimlane/:sessionId',
    component: SwimlaneSectionComponent,
  },
];

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, SideBarComponent, RouterModule.forChild(routes)],
})
export class HomeModule {}
