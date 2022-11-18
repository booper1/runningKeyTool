import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
    
    topBun: any;
    patty: any;
    botBun: any;
    sidebar: any;
    nav: any;

    constructor(private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        let maxLength = 0;
        for (let i: number = 0; i < this.navItems.length; i++) {
            if (this.navItems[i].title.length > maxLength) {
                maxLength = this.navItems[i].title.length;
            }
        }
        document.documentElement.style.setProperty("--nav-length", (maxLength + 6).toString() + "ch");

        this.topBun = document.getElementById("b1");
        this.patty = document.getElementById("b2");
        this.botBun = document.getElementById("b3");
        this.sidebar = document.getElementById("side");
        this.nav = document.getElementById("nav");
    }

    onKeyDownEvent(route: string) {
        this.router.navigate([route], { relativeTo: this.route });
    }

    toggle(): void {
        this.topBun != null ? this.topBun.classList.toggle('angle') : console.log("Undefined");
        this.patty != null ? this.patty.classList.toggle('hide') : console.log("Undefined");
        this.botBun != null ? this.botBun.classList.toggle('angle') : console.log("Undefined");
        this.sidebar != null ? this.sidebar.classList.toggle('show') : console.log("Undefined");
        this.nav != null ? this.nav.classList.toggle('show') : console.log("Undefined");
    }
}
