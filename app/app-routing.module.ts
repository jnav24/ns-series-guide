import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import {ShowsComponent} from '~/pages/shows/shows.component';

const routes: Routes = [
    { path: '', redirectTo: '/shows', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'shows', component: ShowsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
