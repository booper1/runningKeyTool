import { Component, OnInit } from '@angular/core';
import { Global } from './global';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        Global.sidebar = document.getElementById("side");
        Global.clickNet = document.getElementById("clickNet");
        Global.main = document.getElementById("main");
    }

    toggleNav(): void {
        Global.toggleNav();
    }
}
