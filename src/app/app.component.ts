import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
        Global.nav = document.getElementById("nav");
        Global.main = document.getElementById("main");
    }

    toggle(): void {
        Global.toggle();
    }
}
