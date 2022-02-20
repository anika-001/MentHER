import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

import { EventsComponent } from './events/events.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { AddeventComponent } from './addevent/addevent.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: '',
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "chat",
    component: ChatroomComponent
  },{
    path:"events",
    component: EventsComponent
  },
  {
    path:"events/hashtag",
    component:HashtagComponent
  },{
    path:"addevent",
    component:AddeventComponent
  },{
    path:"profilesite",
    component:ProfileComponent
  },{
    path:"createprofile",
    component:CreateprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
