import { Component, OnInit, Input, Output } from '@angular/core';
import { OptionModel } from './shared/option.model';
import { OptionService } from './shared/OptionsService.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.sass']
})
export class OptionsComponent implements OnInit {
  optionsList: OptionModel[] = [{name: 'Macarena ', isImportant: true},{name: 'Look for more examples', isImportant: true} ]
  constructor(private service: OptionService) { }
  ngOnInit() {
  }
  option: OptionModel ={name: 'Macarena ', isImportant: true}
  addNewOption(nuevoDato:OptionModel){
    this.optionsList =  [...this.optionsList, nuevoDato]
    console.log("optionList", this.optionsList);
    console.log("optionList despues push", this.optionsList);
  
  }
  selectedOption?: OptionModel;
  onSelect(option:OptionModel): void {
    this.selectedOption = option;
  }
}
