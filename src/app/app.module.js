"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var timeline_resource_component_1 = require("./timeline-resource.component");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ej2_angular_schedule_1 = require("@syncfusion/ej2-angular-schedule");
var ej2_angular_inputs_1 = require("@syncfusion/ej2-angular-inputs");
var ej2_angular_calendars_1 = require("@syncfusion/ej2-angular-calendars");
var ej2_angular_buttons_1 = require("@syncfusion/ej2-angular-buttons");
var ej2_angular_navigations_1 = require("@syncfusion/ej2-angular-navigations");
var ej2_angular_inputs_2 = require("@syncfusion/ej2-angular-inputs");
var ej2_angular_dropdowns_1 = require("@syncfusion/ej2-angular-dropdowns");
var shared_module_1 = require("./common/shared.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule, ej2_angular_schedule_1.ScheduleAllModule, ej2_angular_schedule_1.RecurrenceEditorAllModule, ej2_angular_inputs_1.NumericTextBoxAllModule,
            ej2_angular_calendars_1.DatePickerAllModule, ej2_angular_calendars_1.TimePickerAllModule, ej2_angular_calendars_1.DateTimePickerAllModule, ej2_angular_buttons_1.CheckBoxAllModule, ej2_angular_navigations_1.ToolbarAllModule, ej2_angular_dropdowns_1.DropDownListAllModule,
            ej2_angular_inputs_2.MaskedTextBoxModule, ej2_angular_dropdowns_1.MultiSelectAllModule, shared_module_1.SharedModule, http_1.HttpModule, http_1.JsonpModule, platform_browser_1.BrowserModule],
        declarations: [timeline_resource_component_1.TimelineResourcesComponent],
        bootstrap: [timeline_resource_component_1.TimelineResourcesComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map