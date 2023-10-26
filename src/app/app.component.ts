import { Component } from '@angular/core';
import { OptionModel } from './shared/Components/options/shared/option.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'indecision-app';
  options: OptionModel[] = [];
  agregarDato(dato:OptionModel)
  {
    this.options.push(dato);
}
send(options: OptionModel[]){
  this.options = options;
  console.log("cuando mando", options);
}

}