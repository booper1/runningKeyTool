import { Component } from '@angular/core';

@Component({
    selector: 'app-tool',
    templateUrl: './tool.component.html',
    styleUrls: ['./tool.component.scss']
})
export class ToolComponent {
    baseIndex: number = 0;
    buffer: string = "";
    ciphertext: string = "";
    crib: string = "";
    error: boolean = false;
    errorMsg: string = "Please enter only alphabetical characters";
    output: string = "";

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
        }
        else {
            this.err();
        }
    }

    clear(): void {
        ((document.getElementById("ciphertext") as HTMLInputElement).value) = "";
        ((document.getElementById("crib") as HTMLInputElement).value) = "";
        this.ciphertext = "";
        this.crib = "";
        this.error = false;
        this.output = "";
    }

    err(): void {
        this.ciphertext = "";
        this.crib = "";
        this.error = true;
        this.output = "";
    }

    shift(direction: number): void {
        let length = this.ciphertext.length - this.crib.length;
        if (length > 0) {
            switch (direction) {
                case 1: {
                    if (this.baseIndex < length) {
                        this.baseIndex++;
                        this.analyze();
                    }
                    break;
                }
                case -1: {
                    if (this.baseIndex > 0) {
                        this.baseIndex--;
                        this.analyze();
                    }
                    break;
                }
                case 2: {
                    this.baseIndex < length - 5 ? this.baseIndex += 5 : this.baseIndex = length;
                    this.analyze();
                    break;
                }
                case -2: {
                    this.baseIndex > 5 ? this.baseIndex -= 5 : this.baseIndex = 0;
                    this.analyze();
                    break;
                }
                case 3: {
                    this.baseIndex = length;
                    this.analyze();
                    break;
                }
                case -3: {
                    this.baseIndex = 0;
                    this.analyze();
                    break;
                }
                default: {
                    this.err();
                    break;
                }
            }
        }
    }
}
