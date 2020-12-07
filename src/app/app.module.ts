import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Store } from 'store';
// feature modules
import { AuthModule } from './../auth/auth.module';
// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  declarations: [AppComponent],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
 var firebaseConfig = {
    apiKey: "AIzaSyAoGAisqpUsB713X_0_tBHBTuTBQtUIia0",
    authDomain: "fitness-app-6280c.firebaseapp.com",
    databaseURL: "https://fitness-app-6280c.firebaseio.com",
    projectId: "fitness-app-6280c",
    storageBucket: "fitness-app-6280c.appspot.com",
    messagingSenderId: "310547498801",
    appId: "1:310547498801:web:ac179239d24cc8fe2b5210",
    measurementId: "G-TK43VS502R"
  };
*/
