import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBhPoW6I2nLWveo8DUM8pccbiODomqLCxg',
  authDomain: 'foodyummy-f8d93.firebaseapp.com',
  databaseURL: 'https://foodyummy-f8d93.firebaseio.com',
  projectId: 'foodyummy-f8d93',
  storageBucket: 'foodyummy-f8d93.appspot.com',
  messagingSenderId: '265568185065',
  appId: '1:265568185065:web:ba8bc61a27adfc22'
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
