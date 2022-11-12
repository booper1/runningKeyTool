import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Global } from '../global';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() color!: string;
    @Output() colorChange = new EventEmitter<string>();

    title = Global.title;
    navItems = [
        { title: "More", route: "#" },
        { title: "Coming", route: "#" },
        { title: "Soon", route: "#" },
        { title: "™", route: "#" }
    ];
    themes: Array<string> = [
        "themeMonochrome",
        "themeGeneric",
        "themeAutumn",
        "themeWinter",
        "themeSpring",
        "themeSummer"
    ];

    ngOnInit(): void {
        let today = new Date();
        let month = today.getMonth();
        switch (month) {
            case 11:
            case 0:
            case 1:
                Global.theme = "themeWinter";
                break;
            case 2:
            case 3:
            case 4:
                Global.theme = "themeSpring";
                break;
            case 5:
            case 6:
            case 7:
                Global.theme = "themeSummer";
                break;
            case 8:
            case 9:
            case 10:
                Global.theme = "themeAutumn";
                break;

            default:
                Global.theme = this.themes[0];
        }
    }

    getHeaderClass(): string {
        return Global.theme;
    }

    onClickSettings(): void {
        console.log(this.themes.indexOf(Global.theme));
        Global.theme = this.themes[(this.themes.indexOf(Global.theme) + 1) % this.themes.length];
    }
}
