import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Store } from 'store';
// feature modules
import { AuthModule } from './../auth/auth.module';
import { HealthModule } from './../health/health.module';
// components
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
// containers
import { AppComponent } from './containers/app/app.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'schedule' },
  { path: '**', redirectTo: 'schedule' }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule, HealthModule],
  declarations: [AppComponent, AppHeaderComponent, AppNavComponent],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
