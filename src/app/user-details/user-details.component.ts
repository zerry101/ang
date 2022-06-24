import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  @Input() item:{name:string,id:number|undefined}={name:'',id:0};

  data_value:string="";


  ngOnInit(): void {
  }

}
