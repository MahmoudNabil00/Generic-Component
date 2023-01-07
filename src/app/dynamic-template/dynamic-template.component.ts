import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.css']
})
export class DynamicTemplateComponent implements OnInit {
  // @ViewChild('A',{ static: true }) templateA: TemplateRef<any>;
  // @ViewChild('B',{ static: true }) templateB: TemplateRef<any>;
  // @ViewChild('C',{ static: true }) templateC: TemplateRef<any>;
  // @ViewChild('default',{ static: true }) default: TemplateRef<any>;
  // @ViewChild('Generic',{ static: true }) Generic: TemplateRef<any>;
  // value:any = ''
  // color:string =''

  @Input() Original : TemplateRef<any>
  @Input()  alert : string = ''
  @ViewChild('def',{ static: true }) def: TemplateRef<any>;
  @Input() clientTempalte : TemplateRef<any>
  color : any = ['red','yellow','blue','black']
  color2:any = 'chartreuse'
  property:any = 'property from dynamic component'
  // @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  // methodToCallOnClick: () => void;
  data:any
  constructor() {
  }

  
  ngOnInit(): any {
    // console.log(this.clientTempalte)
  }
  // getTemplate():any{
  //   if(this.value == 'A'){
  //     this.color ='red'
  //     return this.templateA
  //   }
  //   if(this.value == 'B'){
  //     this.color ='blue'
  //     return this.templateB
  //   }
  //   if(this.value == 'C'){
  //     this.color ='yellow'
  //     return this.templateC
  //   }
  //   if(this.value == ''){
  //     this.color ='brown'
  //     return this.default
  //   }
  // }
  // currentTemplate(value:any){
  //   this.value = value
  // }
  // showAlert(){
  //   if(this.value == ''){
  //     alert('You are in a default template ')
  //   }else{
  //     alert('You are in template '+this.value)
  //   }
  // }
  showAlert(test:any){
    if(test == '1'){
      console.log('alert1')
    }
    // if(this.alert == ''){
    //   return ;
    // }else{
    //   alert('Your messgae is '+' '+this.alert)
    //   this.alert = ''
    // }
  }
  showAlert2(){
    alert('test is work')
  }
  getTemplate(){
    return this.def
  }

}
