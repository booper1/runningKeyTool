import { Component } from '@angular/core';
import { Global } from '../global';

@Component({
    selector: 'app-tool',
    templateUrl: './tool.component.html',
    styleUrls: ['./tool.component.scss']
})
export class ToolComponent {
    output: string = "";

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

    analyze(): void {
        var ciphertext = ((document.getElementById("ciphertext") as HTMLInputElement).value);
        var crib = ((document.getElementById("crib") as HTMLInputElement).value);
        this.output = ciphertext + "" + crib;
        console.log(this.output);
    }
}
