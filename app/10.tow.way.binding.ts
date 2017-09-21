import { Component } from '@angular/core';

@Component({
    selector: 'tut-10',
    template: `<h2>{{ title }}</h2>
                <input type="text" [(ngModel)]="fname">
                <input type="text" [(ngModel)]="lname">
                Fullname: {{fname}} {{lname}}
                
    `
})
export class _11_TowWayBinding {
    public title: string = "Tutorials: Event binding and references";
    public fname: string;
    public lname: string;
}