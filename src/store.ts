import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { User } from './auth/shared/services/auth/auth.service';
import { Meal } from './health/shared/services/meals/meals.service';
import { ScheduleItem } from './health/shared/services/schedule/schedule.service';
import { Workout } from './health/shared/services/workouts/workouts.service';

export interface State {
  user: User;
  meals: Meal[];
  date: Date;
  workouts: Workout[];
  schedule: ScheduleItem[];
  [key: string]: any;
}

const state: State = {
  user: undefined,
  meals: undefined,
  date: undefined,
  workouts: undefined,
  schedule: undefined
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
