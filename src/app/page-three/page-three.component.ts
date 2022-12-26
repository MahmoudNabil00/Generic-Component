import { GenericComponent } from './../generic/generic.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent extends GenericComponent implements OnInit {

  constructor() {
    super()
  }

  override ngOnInit(): void {
  }

}
