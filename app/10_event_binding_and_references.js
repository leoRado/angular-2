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
var _10_EventBindingAndReferences = (function () {
    function _10_EventBindingAndReferences() {
        this.title = "Tutorials: Event binding and references";
    }
    _10_EventBindingAndReferences.prototype.onClick = function (value) {
        console.log("Button clicked: " + value);
    };
    _10_EventBindingAndReferences.prototype.onClickWithEvent = function (event) {
        console.log(event);
    };
    _10_EventBindingAndReferences = __decorate([
        core_1.Component({
            selector: 'tut-10',
            template: "<h2>{{ title }}</h2>\n                <button (click)=\"onClick(demoInput.value)\">Click Me</button>\n                <button (click)=\"onClickWithEvent($event)\">Click Me</button>\n                <input type=\"text\" #demoInput>"
        }), 
        __metadata('design:paramtypes', [])
    ], _10_EventBindingAndReferences);
    return _10_EventBindingAndReferences;
}());
exports._10_EventBindingAndReferences = _10_EventBindingAndReferences;
//# sourceMappingURL=10_event_binding_and_references.js.map