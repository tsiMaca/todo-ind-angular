import { Component, OnInit, Input } from '@angular/core';
import { OptionModel } from '../options/shared/option.model';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  @Input() optionList! : OptionModel[];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(optionList : OptionModel[]){
    console.log("mi primer click")
    console.log(optionList);
    const randomNum = Math.floor(Math.random() * optionList.length);
    console.log("seleccion", randomNum);
    const option :OptionModel = optionList[randomNum]
    console.log("opcion", option);
    alert(option.name)
  }
}
