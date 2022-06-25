import { Component, EventEmitter, OnInit,Output,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() value:string="";


  @Output() update=new EventEmitter<string>();
  constructor() { }

  // prev_data:string=this.value;
  // this.value=

  // searchValue:string = '';


  ngOnInit(): void {
  }

  //  list_element:string=""

  list_array: Array<string> = [];

  arraypush(list_element:string)
  {
    this.list_array.push(list_element);
  }

}
