import { Component, Input } from '@angular/core';
import { OptionModel } from '../shared/option.model';

@Component({
    selector: 'option-detail',
    template: ` <div *ngIf="option">
    <h2>Selected todo:</h2>
    <div class="subject">{{option.name}}</div>
    <div>{{option.isImportant}}</div>
</div>`,
   styleUrls: ['./option-detail.component.sass']

  })
  export class OptionDetailComponent {
    @Input()
    option!: OptionModel;

        constructor () {}
    }
  