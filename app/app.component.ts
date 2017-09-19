import { Component } from '@angular/core';
import { TutorialComponent } from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World from Leonhard</h2>
          <my-tutorials></my-tutorials>`,
  directives: [ TutorialComponent ]
})
export class AppComponent { }
