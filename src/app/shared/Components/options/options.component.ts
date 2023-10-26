import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { OptionModel } from './shared/option.model';
import { OptionService } from './shared/OptionsService.service';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.sass']
})
export class OptionsComponent implements OnInit {
  optionsList: OptionModel[] = [{name: 'Make small projects to practice ', isImportant: true},{name: 'Look for more examples', isImportant: true} ]
  constructor() { }
  ngOnInit() {
  }
  addNewOption(nuevoDato:OptionModel){
    this.optionsList =  [...this.optionsList, nuevoDato]
  
  }
  
  removeOption(option: OptionModel) {
    const index = this.optionsList.indexOf(option);
    if (index > -1) {
      this.optionsList.splice(index, 1);
    }
  }
  removeOptionsList(){
    this.optionsList = []
  }
}
