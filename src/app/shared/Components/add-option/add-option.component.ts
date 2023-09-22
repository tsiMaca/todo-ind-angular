import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.sass']
})
export class AddOptionComponent implements OnInit {
  mensaje=''
  constructor() { }

  ngOnInit(): void {
  }

}
