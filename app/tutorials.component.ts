import { Component } from '@angular/core'

@Component({
    selector: 'my-tutorials',
    template: `<h2>Awesome tutorial</h2>
                <h3>{{ title }}</h3>
                <img [src]=imgLink>
                <br><br>
                <input type="text" value="Angular">
                <h4>Header 4 tutorial component</h4>
                <div [class.myClass]="applyclass"></div>
                <div [style.color]="applyblue?'blue':'orange'"></div>`,
    styles: [`
        .myClass {
            color: blue;
        }
        h4:{
            color: red;
        }
    `]
})
export class TutorialsComponent {
    public title: string = "Tutorials";
    public imgLink: string = "http://lorempixel.com/400/200";
    public applyclass: boolean = true;
    public applyblue: boolean = true;
}