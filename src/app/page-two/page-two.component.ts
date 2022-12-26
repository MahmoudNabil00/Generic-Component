import { GenericComponent } from './../generic/generic.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent extends GenericComponent implements OnInit {

  constructor() { 
    super()
  }

  override ngOnInit(): void {
    
  }

}
