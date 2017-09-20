"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.h3Title = "H3 title";
        this.applyclass = true;
        this.applyblue = true;
    }
    TutorialComponent.prototype.onClick = function () {
        console.log("Button clicked");
    };
    TutorialComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "<h2>Awesome tutorial</h2>\n                <h3>{{h3Title}}</h3>\n                <div [class.myClass]=\"applyclass\"></div>\n                <div [style.color]=\"applyblue?blue:orange\"></div>\n                <button (click)=\"onClick()\"></button>\n                <input #inputField type=\"text\">\n    ",
            styles: [".myClass {\n        color: red;\n    }"]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorials.component.js.map