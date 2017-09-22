import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World from Leonhard</h1>
            <label> Enter Parent app component value </label>
            <input type="text" #parentText (keyup)="0">
            <p>Value from Child component is </p>
            {{childData}}
            <my-tutorials (childEvent)="childData=$event" [parentData]="parentText.value"></my-tutorials>`,
    directives: [TutorialsComponent]
})
export class AppComponent {
    public childData: string;
 }