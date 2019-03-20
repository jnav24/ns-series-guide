import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-side-drawer',
    templateUrl: './side-drawer.component.html',
    styleUrls: ['./side-drawer.component.scss'],
    moduleId: module.id,
})
export class SideDrawerComponent implements OnInit {
    pages: Array<{ icon: string; text: string; link: string; }> = [
        { icon: '', text: 'Shows', link: '' },
        { icon: '', text: 'Lists', link: '' },
        { icon: '', text: 'Movies', link: '' },
        { icon: '', text: 'Statistics', link: '' },
    ];

    ngOnInit() {}
}
