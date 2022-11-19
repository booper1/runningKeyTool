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
        Global.sidebar = document.getElementById("side");
        Global.clickNet = document.getElementById("clickNet");
        Global.nav = document.getElementById("nav");
        Global.main = document.getElementById("main");
    }

    onKeyDownEvent(route: string) {
        this.router.navigate([route], { relativeTo: this.route });
    }

    toggle(): void {
        Global.toggle();
    }
}
