import { Component, OnInit } from '@angular/core';
import { OptionModel } from './shared/option.model';
import { OptionService } from './shared/OptionsService.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.sass']
})
export class OptionsComponent implements OnInit {
  options: OptionModel[] =[];
  selectedOption: OptionModel = new OptionModel('read ts', true) ;

  constructor(private service: OptionService) { }

  ngOnInit(): void {
  this.options =this.service.getOptions();
  }
  selectOption(option:OptionModel){
    this.selectedOption = option;
  }

}
