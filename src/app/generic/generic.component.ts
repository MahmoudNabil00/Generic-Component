import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  showAlert(message:string='Hello from Generic Component to the current component'){
    alert(message)
  }

}
