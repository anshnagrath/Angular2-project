import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first app';
  obj = {
    id: '1',
    name: 'ansh'
  };
arr = [ 'created for the first time', 'ng for used here' , 'learing through tutorials']
isTrue = true;
myName = 'ansh';
}
