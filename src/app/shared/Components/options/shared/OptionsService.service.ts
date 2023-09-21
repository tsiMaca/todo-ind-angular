import { Injectable} from "@angular/core";
import {OptionModel} from './option.model';
import { Logger } from "src/app/shared/services/Logger.service";

@Injectable({ providedIn: 'root'})
export class OptionService {
    options: OptionModel[] = [];
    constructor( public loogger:Logger){}
    addOption(option:OptionModel){
        this.options = [...this.options, option];
        this.loogger.log(this.options);
    }
    getOptions() {
        this.loogger.log(this.options)
        return this.options;
    }
}