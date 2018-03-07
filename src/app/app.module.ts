import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import  { AngularFirestoreModule } from 'angularfire2/firestore';

import  { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';

var firebaseConfig = {
	 apiKey: "AIzaSyA8w6cEY7cXMj-x-WIuX_gRHoDKO6dNGag",
    authDomain: "firestore-2b119.firebaseapp.com",
    databaseURL: "https://firestore-2b119.firebaseio.com",
    projectId: "firestore-2b119",
    storageBucket: "firestore-2b119.appspot.com",
    messagingSenderId: "876693099099"


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
