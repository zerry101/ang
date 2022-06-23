import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  getStr(name:any){
    return alert("hello "+name);
  }


  getData(val:string|undefined){
    console.warn(val);
    
  }
}
