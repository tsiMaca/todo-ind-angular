import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/Components/header/header.component';
import { MaterialModule } from './material.module';
import { ActionComponent } from './shared/Components/action/action.component';
import { OptionsComponent } from './shared/Components/options/options.component';
import { OptionDetailComponent } from './shared/Components/options/optionDetail/option-detail.component';
import { Logger } from './shared/services/Logger.service';
import { AddOptionComponent } from './shared/Components/add-option/add-option.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActionComponent,
    OptionsComponent,
    OptionDetailComponent,
    AddOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
