import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
    navItems: { title: string; route: string; icon: IconProp }[] = [
        { title: "Home", route: "", icon: "house"},
        { title: "About", route: "about", icon: "user"},
        { title: "Projects", route: "projects", icon: "list-check"},
        { title: "Contact", route: "contact", icon: "message"}
    ];

    ngOnInit(): void {
        let length = 0;
        for (let i: number = 0; i < this.navItems.length; i++) {
            if (this.navItems[i].title.length > length) {
                length = this.navItems[i].title.length;
            }
        }
        document.documentElement.style.setProperty("--nav-length", (length + 6).toString() + "ch");
    }
}
