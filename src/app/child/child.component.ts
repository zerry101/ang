import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  list_array: Array<any> = [];

  @Input() value: string = "";
  @Output() update = new EventEmitter<string>();

  constructor(private formbuilder: FormBuilder) { }

  // prev_data:string=this.value;
  // this.value=

  // searchValue:string = '';


  ngOnInit(): void {
    this.setupForm();
  }

  arraypush(value: any) {
    if(this.dataForm.valid){
      this.list_array.push(value);
      this.dataForm.reset();
    }else{
      this.dataForm.markAllAsTouched();
      this.dataForm.markAsDirty();
    }
  }

  setupForm() {
    this.dataForm = this.formbuilder.group({
      title: ['', Validators.required],
      message: ['', Validators.required],
      amount: ['', Validators.required]
    })
  }
  editRow(row: any) {
    this.dataForm.setValue({
      title: row.title,
      message: row.message,
      amount: row.amount
    });
    console.log(row);
  }

  get control(){
    return this.dataForm.controls['title'];
  }
}
