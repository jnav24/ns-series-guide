import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-side-drawer',
    templateUrl: './side-drawer.component.html',
    styleUrls: ['./side-drawer.component.scss'],
    moduleId: module.id,
})
export class SideDrawerComponent implements OnInit {
    pages: Array<{ icon: string; text: string; link: string[]; }> = [
        { icon: String.fromCharCode(0xf26c), text: 'Shows', link: ['/shows'] },
        { icon: String.fromCharCode(0xf03a), text: 'Lists', link: ['/'] },
        { icon: String.fromCharCode(0xf008), text: 'Movies', link: ['/'] },
        { icon: String.fromCharCode(0xf080), text: 'Statistics', link: ['/'] },
    ];

    ngOnInit() {}
}
