import { Component } from '@angular/core';
import { Global } from '../global';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        trigger('rotatedState', [
            state('light', style({ transform: 'rotate(0)' })),
            state('dark', style({ transform: 'rotate(-180deg)' })),
            transition('dark => light', animate('50ms ease-in-out')),
            transition('light => dark', animate('50ms ease-in-out'))
        ])
    ]
})
export class HeaderComponent {
    navItems = [
        { title: "Home", route: "" },
        { title: "About", route: "about" }
    ];
    theme: string = 'light';

    getHeaderClass(): string {
        return Global.theme;
    }

    onClickTheme(): void {
        Global.theme = Global.theme == "themeMono" ? "themeSynth" : "themeMono";
        this.theme = (this.theme === 'light' ? 'dark' : 'light');
        switch (Global.theme) {
            case ("themeSynth"):
                document.documentElement.style.setProperty("--theme-bg", Global.themeSynth_bg);
                document.documentElement.style.setProperty("--theme-text", Global.themeSynth_text);
                break;
            default:
                document.documentElement.style.setProperty("--theme-bg", Global.themeMono_bg);
                document.documentElement.style.setProperty("--theme-text", Global.themeMono_text);
                break;
        }
    }
}
