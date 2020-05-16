import { NgModule, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {
    title = 'ng-content';

  infoCards = [
    {name: 'Tommas Shelby', value: '50%',class:'2'},
    {name: 'Oliver Queen', value: '100%',class:'3'},
    {name: 'John Wick', value: '40%'  ,class:'5'},
    {name: 'Bruce Wayne', value: '5%' ,class:'6'}
  ];
  contentCards = [
    {name: 'Card Name'}
  ];
  ngOnInit() {
  }
}
