import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  styleUrls: ['list-item.component.scss'],
  template: `
    <div clas="list-item">
      {{ item | json }}
    </div>
  `
})
export class ListItemComponent {
  @Input()
  item: any;
  constructor() {}
}
