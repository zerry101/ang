import { Component } from '@angular/core';

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


}
