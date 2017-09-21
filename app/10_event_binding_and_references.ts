import { Component } from '@angular/core';

@Component({
    selector: 'tut-10',
    template: `<h2>{{ title }}</h2>
                <button (click)="onClick(demoInput.value)">Click Me</button>
                <button (click)="onClickWithEvent($event)">Click Me</button>
                <input type="text" #demoInput>` 
                // (click) => in paranthesis provide event that has to be handled
                // $event => get event object
                // #demoInput stores reference to input element
})
export class _10_EventBindingAndReferences {
    public title: string = "Tutorials: Event binding and references";

    onClick(value){
        console.log("Button clicked: " + value);
    }

    onClickWithEvent(event) {
        console.log(event);
    }
}