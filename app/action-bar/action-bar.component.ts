import {Component, Input, OnInit} from '@angular/core';
import {registerElement} from "nativescript-angular";

registerElement("StatusBar", () => require("nativescript-statusbar").StatusBar);

declare var android: any;

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
  moduleId: module.id,
})
export class ActionBarComponent implements OnInit {
    @Input() public title: string;

    constructor() { }

    ngOnInit() {}
}
