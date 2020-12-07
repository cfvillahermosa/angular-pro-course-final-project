import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' }
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyAoGAisqpUsB713X_0_tBHBTuTBQtUIia0',
  authDomain: 'fitness-app-6280c.firebaseapp.com',
  databaseURL: 'https://fitness-app-6280c.firebaseio.com',
  projectId: 'fitness-app-6280c',
  storageBucket: 'fitness-app-6280c.appspot.com',
  messagingSenderId: '310547498801'
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
