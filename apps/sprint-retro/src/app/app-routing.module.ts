import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@planning-poker-app/sprint-retro-auth';
import { HomepageComponent } from './home/homepage/homepage.component';
import { JoinFormComponent } from './board/joinForm/join-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'joiningForm', component: JoinFormComponent
  },
  {
    path: 'home',
    component: HomepageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((x) => x.HomeModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
