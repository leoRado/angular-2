import { Component } from '@angular/core'
import { EventEmitter } from '@angular/core'

@Component({
    selector: 'my-tutorials',
    template: `<h2>Awesome tutorial</h2>
                <h3>{{ title }}</h3>
                <label> Enter Child component value </label>
                <input type="text" #childText (keyup)="onChange(childText.value)">
                <p>Value from Parent component is </p>
                {{parentData}}
                `,
    inputs: [`parentData`],
    outputs: [`childEvent`]
})
export class TutorialsComponent {
    public title: string = "Tutorials";
    public parentData: string;
    childEvent = new EventEmitter<string>();

    onChange(value:string) {
        this.childEvent.emit(value);
    }
}