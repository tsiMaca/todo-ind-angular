import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OptionModel } from '../shared/option.model';
@Component({
    selector: 'option-detail',
    templateUrl:'./option-detail.html',
   styleUrls: ['./option-detail.component.sass']

  })
  export class OptionDetailComponent {
    @Input() option?: OptionModel[];
    /*  @Output() deleteOptionEvent = new EventEmitter<OptionModel>(); */
    constructor() {}
    
    ngOnInit() {
    }

}