import { Component } from '@angular/core'

@Component({
    selector: 'my-tutorials',
    template: `<h2>Awesome tutorial</h2>
                <h3>{{h3Title}}</h3>
                <img [src]="imgSrc">
                <div [class.myClass]="applyclass"></div>
                <div [style.color]="applyblue?blue:orange"></div>
                <button (click)="onClick()"></button>
                <input #inputField type="text">
                <button (click)="onClick(inputField.value, $event)"></button>
                <input type="text" [(ngModel)]="fname">
                <input type="text" [(ngModel)]="lname">
    `,
    styles: [`.myClass {
        color: red;
    }`]
})
export class TutorialComponent {
    public h3Title: string = "H3 title";
    public imgSrc: string = "http://lorempixel/400/200";
    public applyclass: boolean = true;
    public applyblue: boolean = true;
    public fname: string;
    public lname: string;
        
    onClick(value:object=null, event:object=null) {
        console.log(`${value} is clicked`);
        console.log(`${event} event`);
    };
}