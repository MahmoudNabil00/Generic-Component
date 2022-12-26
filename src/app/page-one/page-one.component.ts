import { GenericComponent } from './../generic/generic.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent extends GenericComponent implements OnInit {
  messageFromPageOne : string = 'this is page one inherit from base component'
  constructor() {
    super()
  }

  override ngOnInit(): void {
  }

}
