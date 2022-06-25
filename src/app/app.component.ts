import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';



render_value='';
val1: string='';

 getValue(val:string)
 {
  console.log(val);
  this.render_value=val;

 }

  count_1=0;

inc_dec_val(val1:string){

  val1=='add' ?this.count_1++:this.count_1--;

  console.log(this.count_1);

}


name:string='peter';

disable=false;



show=false;

color="green";

switch_color="red";

users=["zishan","asim","sohel","farhan"];

user_details=[{name:"zishan",email:"zi@gmail.com", social_accounts:['fb','insta','wp']},
              {name:"sohel",email:"so@gmail.com",social_accounts:['fb','insta','wp']}
             ];


s_color="green";
data_value="";
updateColor(){
  this.s_color="red";
}

user_data=[
  {name:"zi",id:45},
  {name:"so",id:54},
  {name:"io",id:65}
]

data:string=' ';

update_data(data_value:any){
  console.log(data_value);
  this.data=data_value;
}


// name_1:any="";
name1 :any ;


get_r_val(str:any){
  console.log(str);
}



loginform=new FormGroup({
  user:new FormControl(''),
  password:new FormControl('')
});

loginUser(){
  console.warn(this.loginform.value);
}


}
