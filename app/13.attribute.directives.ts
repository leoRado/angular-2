import { Component } from '@angular/core'

@Component({
    selector: 'my-tutorials',
    template: `<h2>Awesome tutorial</h2>
                <h3>{{ title }}</h3>
                <p [ngClass]="{classOne:cone, classTwo:ctwo}">ngClass paragraph</p>
                <button (click)="toggle()">Toggle</button>
                <p [ngStyle]="{'font-style':style,'font-size':size}">ngStyle paragraph</p>
                `,
    styles: [`.classOne{color:white;}
                .classTwo{color:black;}
    `]
})
export class TutorialsComponent {
    public title: string = "Tutorials";
    public cone: boolean = true;
    public ctwo: boolean = true;
    public style: string = 'italic';
    public size: string = '30px';

    toggle() {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }
}