import { Component} from '@angular/core';
import { SortPipe } from '../../app.sort';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first app';
  items = [ 'angular 4', 'node' , 'mean stack']
newItem = '';
sortArr = [2,67,56,34,23];
store = [];
inputNumber: number[];

pushItem = function() {
if ( this.newItem !== '' ) {
  this.items.push(this.newItem);
  this.newItem = '';
}
};
removeItem = function(index) {
this.item.splice(index, 1);
}

pushArray = function() { 
  if (this.inputNumber !== '') {
 this.sortArr.push(this.inputNumber);
  }
  this.store = this.sortArr;
console.log(this.store, '=======>>>.');


}

}
