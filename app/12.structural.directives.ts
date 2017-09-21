import { Component } from '@angular/core'

@Component({
    selector: 'my-tutorials',
    template: `<h2>Awesome tutorial</h2>
                <h3>{{ title }}</h3>
                <p *ngIf="showelement">Show element</p>
                <div [ngSwitch]="color">
                    <p *ngSwitchWhen="'red'">Red is shown</p>
                    <p *ngSwitchWhen="'blue'">Blue is shown</p>
                    <p *ngSwitchDefault>Invalid color</p>
                </div>
                <ul>
                    <li *ngFor="let color of colors">{{color}}</li>
                </ul>
                `
})
export class TutorialsComponent {
    public title: string = "Tutorials";
    public showelement: boolean = true;
    public color: string = 'red';
    public colors = ['red', 'blue', 'green']
}