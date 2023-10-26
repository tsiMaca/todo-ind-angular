import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OptionModel } from '../options/shared/option.model';
import { OptionService } from '../options/shared/OptionsService.service';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.scss']
})
export class AddOptionComponent {
  @Input()
  option: OptionModel[] = [];
  @Output() newOptionEvent = new EventEmitter<OptionModel>();

  name: string = '';
  isImportant: boolean = false;
  submitted: boolean = false;
  onSubmit() {
   
      this.submitted = true;
      const nuevoDato = new OptionModel(this.name, this.isImportant); // Crea una nueva instancia de OptionModel
      this.newOptionEvent.emit(nuevoDato);
      this.name = ''; // Limpia los campos después de agregarlos
      this.isImportant = false;
      
  }
}
