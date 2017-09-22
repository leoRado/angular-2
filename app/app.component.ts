import { Component } from '@angular/core';
import { TutorialsComponent } from './15.pipes';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World from Leonhard</h1>
            <my-tutorials></my-tutorials>`,
  directives: [ TutorialsComponent ]
})
export class AppComponent { }
