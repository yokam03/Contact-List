import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import  { AngularFirestoreModule } from 'angularfire2/firestore';

import  { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';

var firebaseConfig = {
  apiKey: "AIzaSyBAhLGRTvGgKwjDWm4sVluGDF_7N4CJRJE",
  authDomain: "contact-list-3c442.firebaseapp.com",
  databaseURL: "https://contact-list-3c442.firebaseio.com",
  projectId: "contact-list-3c442",
  storageBucket: "contact-list-3c442.appspot.com",
  messagingSenderId: "153547902293"



};

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
