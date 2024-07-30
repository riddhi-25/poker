import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SideBarComponent } from 'libs/ui-libs/side-nav-bar/src/lib/SideBar/side-bar.component';
import { SwimlaneComponent } from 'libs/ui-libs/swimlanes-section/src/lib/swimlane/swimlane.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { SwimlaneModule } from './swimlane/swimlane.module';
import { BoardModule } from './board/board.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '@planning-poker-app/environments';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    SideBarComponent,
    SwimlaneComponent,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule,
    HeaderModule,
    SwimlaneModule,
    BoardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
