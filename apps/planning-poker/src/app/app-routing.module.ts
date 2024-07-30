import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '@planning-poker-app/planning-poker-auth';
import { SessionHistoryComponent } from './components/session-history/session-history.component';
import { AddSessionComponent } from './components/add-session/add-session.component';
import { ActiveSessionComponent } from './components/active-session/active-session.component';
import { HomeComponent } from './components/home/home.component';
import { JoinSessionComponent } from './components/join-session/join-session.component';

export const routes:Routes=[
    {path:'',component:AuthComponent},
    {path:'home',component:HomeComponent},
    {path:'sessionshistory',component:SessionHistoryComponent},
    {path:'addsession',component:AddSessionComponent},
    {path:'joinsession',component:JoinSessionComponent},
    {path:'session/:sessionId',component:ActiveSessionComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  