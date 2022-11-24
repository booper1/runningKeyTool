import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from './global';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit(): void {
        Global.sidebar = document.getElementById("side");
        Global.clickNet = document.getElementById("clickNet");
        Global.main = document.getElementById("main");
    }

    toggleNav(): void {
        Global.toggleNav();
    }

    changeOfRoutes(event: any): void {
        Global.page = this.router.url.substring(1);
        if (Global.page === "") {
            Global.page = "home";
        }
    }
}
