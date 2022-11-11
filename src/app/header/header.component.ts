import { Component, OnInit } from '@angular/core';
import { Global } from '../global';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    title = Global.title;
    navItems = [
        { title: "More", route: "#" },
        { title: "Coming", route: "#" },
        { title: "Soon", route: "#" },
        { title: "™", route: "#" }
    ];
    shuffleColor: string = "#333";

    constructor() {
    }

    ngOnInit(): void {
    }

    onClickSettings(): void {
        //console.log("Toggle Settings Menu");
    }

    onClickShuffle(): void {
        console.log("Shuffle");
         this.shuffleColor = '#' + (Math.random() * 0xCCCCCC << 0).toString(16).padStart(6, '0');
    }

}
