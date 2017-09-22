import { Component } from '@angular/core';

@Component({
  selector: 'my-tutorials',
  template: `<h2>{{name}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | slice:'2':'4'}}</h2>
  <h2>{{name | replace:'Le':'Be'}}</h2>
  <h2>{{8.5673464}}</h2>
  <h2>{{8.5673464 | number:'1.2-3'}}</h2>
  <h2>{{8.5 | number:'1.2-3'}}</h2>
  <h2>{{8.5673464 | number:'3.2-3'}}</h2>
  <h2>{{8.5673464 | number:'1.2-3'}}</h2>
  <h2>{{6.99 | currency:'EUR'}}</h2>
  <h2>{{6.99 | currency:'EMR':true}}</h2>
  <h2>{{6.99 | currency:'USD'}}</h2>
  <h2>{{6.99 | currency:'USD':true}}</h2>
  <h2>{{date}}</h2>
  <h2>{{date | date:'fullDate'}}</h2>
  <h2>{{date | date:'shortDate'}}</h2>
  <h2>{{date | date:'mediumTime'}}</h2>
  <h2>{{date | date:'shortTime'}}</h2>
  
  `
})
export class TutorialsComponent {
    name: string = "Leonhard"
    date: Date = new Date();
 }
