import { Injectable} from "@angular/core";
import {OptionModel} from './option.model';
import { Logger } from "src/app/shared/services/Logger.service";

@Injectable({ providedIn: 'root'})
export class OptionService {
    optionsList: OptionModel[] = [];
    constructor( ){}
    
    addOption(option:OptionModel){
        this.optionsList = [...this.optionsList, option];
        console.log("donde veo optionsList", this.optionsList);
    }
    getOptions() {
        return this.optionsList;
    }
}