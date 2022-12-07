import { Component } from '@angular/core';
import { Global } from './global';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    author: string = "Cooper Baumgarth";

    ngOnInit(): void {
        Global.light = document.getElementById("light");
        Global.dark = document.getElementById("dark");

        document.documentElement.setAttribute('data-theme', 'light');
        if (localStorage.getItem('data-theme') === null) {
            localStorage.setItem('data-theme', 'light');
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                Global.toggleTheme();
            }
        }
        else {
            if (localStorage.getItem('data-theme') === 'dark') {
                Global.toggleTheme();
            }
        }
    }

    toggleTheme(): void {
        Global.toggleTheme();
    }
}
