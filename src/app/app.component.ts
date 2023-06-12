
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  name = 'u';
  oddNumbers = [1,3,5,7];
  evenNumbers = [2,4,6,8];
  onlyOdd = false;
}
