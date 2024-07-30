import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SessionHistoryComponent } from './components/session-history/session-history.component';
import { PokerSessionService } from '@planning-poker-app/frontend-lib/services';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '@planning-poker-app/environments';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from '@planning-poker-app/ui-libs/button';
import { SidePanelComponent } from '@planning-poker-app/ui-libs/side-panel';
import { AddSessionComponent } from './components/add-session/add-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActiveSessionComponent } from './components/active-session/active-session.component';
import { HomeComponent } from './components/home/home.component';
import { JoinSessionComponent } from './components/join-session/join-session.component';
import { VoteCardComponent } from '@planning-poker-app/ui-libs/cards/vote-card';
import { FooterComponent } from './components/footer/footer.component';
import { TimerComponent } from './components/active-session/timer/timer.component';
import { SlidingPanelComponent } from './components/active-session/sliding-panel/sliding-panel.component';
import { VotesComponent } from './components/active-session/votes/votes.component';
import { SubHeaderComponent } from './components/active-session/sub-header/sub-header.component';
import { IssueCardComponent } from '@planning-poker-app/ui-libs/cards/issue-card';

@NgModule({
  declarations: [
    AppComponent,
    SessionHistoryComponent,
    HeaderComponent,
    AddSessionComponent,
    ActiveSessionComponent,
    HomeComponent,
    JoinSessionComponent,
    FooterComponent,
    TimerComponent,
    SlidingPanelComponent,
    VotesComponent,
    SubHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    ButtonComponent,
    ReactiveFormsModule,
    VoteCardComponent,
    SidePanelComponent,
    IssueCardComponent,
    FormsModule
  ],
  providers: [PokerSessionService],
  bootstrap: [AppComponent],
  exports: [
    SessionHistoryComponent,
    HeaderComponent,
    FooterComponent,
    SidePanelComponent,
    SlidingPanelComponent,
  ],
})
export class AppModule {}
