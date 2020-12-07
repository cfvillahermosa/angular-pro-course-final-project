import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// components
import { AuthFormComponent } from './components/auth-form/auth-form.component';
// services
import { AuthService } from './services/auth/auth.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent]
})
export class SharedModule {
  // to avoid duplicate instances of AuthService (SharedModule is being imported in LoginModule and RegisterModule)
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService]
    };
  }
}
