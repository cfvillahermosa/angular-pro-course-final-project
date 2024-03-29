import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//components
import { MealFormComponent } from './components/meal-form/meal-form.component';


// containers
import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';

export const ROUTES: Routes = [
  { path: '', component: MealsComponent },
  { path: 'new', component: MealComponent },
  { path: ':id', component: MealComponent }
];
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(ROUTES), SharedModule],
  declarations: [MealsComponent, MealComponent, MealFormComponent]
})
export class MealsModule {}
