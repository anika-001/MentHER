import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule} from '@angular/cdk/drag-drop';
import {MatTooltipModule} from '@angular/material/tooltip';

import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';


import { NavbarComponent } from './navbar/navbar.component';

import { FilldbComponent } from './filldb/filldb.component';
import { HttpClientModule } from '@angular/common/http';

import { ChatroomComponent } from './chatroom/chatroom.component';
import { EventsComponent } from './events/events.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { AddeventComponent } from './addevent/addevent.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,

    SigninComponent,
    HomeComponent,
    TooltipDirective,
    NavbarComponent,
    FilldbComponent,
    ChatroomComponent,
    EventsComponent,
    HashtagComponent,
    AddeventComponent,
    ProfileComponent,
    CreateprofileComponent,

  ],
  imports: [
    OverlayModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    //FontAwesomeModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSelectModule,
    MatGridListModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTooltipModule
  
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
