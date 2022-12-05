import { Component } from '@angular/core';
import { Global } from '../global';

@Component({
    selector: 'app-tool',
    templateUrl: './tool.component.html',
    styleUrls: ['./tool.component.scss']
})
export class ToolComponent {
    ciphertext: string = "";
    crib: string = "";
    output: string = "";
    baseIndex: number = 0;
    buffer: string = "";
    error: boolean = false;
    errorMsg: string = "Please enter only letter characters";

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
        this.ciphertext = ((document.getElementById("ciphertext") as HTMLInputElement).value).toLowerCase().replace(/\s/g, "");
        this.crib = ((document.getElementById("crib") as HTMLInputElement).value).toLowerCase().replace(/\s/g, "");

        if (/^[A-Za-z\s]*$/.test(this.ciphertext) && /^[A-Za-z\s]*$/.test(this.crib)) {
            this.error = false;
            this.output = "";

            for (let i: number = this.baseIndex; i < this.ciphertext.length && i < this.crib.length + this.baseIndex; i++) {
                let index = ((this.ciphertext.charAt(i).charCodeAt(0) - 96) - (this.crib.charAt(i - this.baseIndex).charCodeAt(0) - 96));
                let charCode = (((index % 26) + 26) % 26) + 1;
                this.output += String.fromCharCode(charCode + 96);
            }

            this.buffer = "";
            for (let i: number = 0; i < this.baseIndex; i++) {
                this.buffer += " ";
            }
            this.ciphertext = this.ciphertext.toUpperCase();
        } else {
            this.ciphertext = "";
            this.crib = "";
            this.output = "";
            this.error = true;
        }
    }

    clear(): void {
        ((document.getElementById("ciphertext") as HTMLInputElement).value) = "";
        ((document.getElementById("crib") as HTMLInputElement).value) = "";
        this.ciphertext = "";
        this.crib = "";
        this.output = "";
    }

    shift(direction: number): void {
        if (direction === 0) { // Shift Left
            if (this.baseIndex > 0) {
                this.baseIndex--;
                this.analyze();
            }
        } else { // Shift Right
            if (this.baseIndex < this.ciphertext.length - this.crib.length) {
                this.baseIndex++;
                this.analyze();
            }
        }
    }
}
