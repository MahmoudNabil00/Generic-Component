import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.css']
})
export class DynamicTemplateComponent implements OnInit {
  @ViewChild('A',{ static: true }) templateA: TemplateRef<any>;
  @ViewChild('B',{ static: true }) templateB: TemplateRef<any>;
  @ViewChild('C',{ static: true }) templateC: TemplateRef<any>;
  @ViewChild('default',{ static: true }) default: TemplateRef<any>;
  value:any = ''
  constructor() {
  }

  ngOnInit(): any {
  }
  getTemplate():any{
    if(this.value == 'A'){
      return this.templateA
    }
    if(this.value == 'B'){
      return this.templateB
    }
    if(this.value == 'C'){
      return this.templateC
    }
    if(this.value == ''){
      return this.default
    }
  }
  currentTemplate(value:any){
    this.value = value
  }
  showAlert(){
    if(this.value == ''){
      alert('You are in a default template ')
    }else{
      alert('You are in template '+this.value)
    }
  }
}
