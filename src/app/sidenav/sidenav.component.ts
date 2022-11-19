import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Global } from '../global';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
    navItems: { title: string; icon: IconProp }[] = [
        { title: "home", icon: "house"},
        { title: "about", icon: "user"},
        { title: "projects", icon: "list-check"},
        { title: "contact", icon: "message"}
    ];

    constructor(private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        Global.topBun = document.getElementById("b1");
        Global.patty = document.getElementById("b2");
        Global.botBun = document.getElementById("b3");
        Global.nav = document.getElementById("nav");
        Global.light = document.getElementById("light");
        Global.dark = document.getElementById("dark");

        if (window.matchMedia("(max-width: 1200px)").matches) {
            Global.toggleNav();
        }

        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            Global.toggleTheme();
        }
    }

    onKeyDownEvent(route: string) {
        this.router.navigate([route], { relativeTo: this.route });
    }

    toggleNav(): void {
        Global.toggleNav();
    }

    closeNav(): void {
        if (Global.navOpen && window.matchMedia("(max-width: 1200px)").matches) {
            Global.toggleNav();
        }
    }

    toggleTheme(): void {
        Global.toggleTheme();
    }
}
