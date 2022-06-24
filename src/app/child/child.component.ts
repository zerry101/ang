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

  ngOnInit(): void {
  }

}
