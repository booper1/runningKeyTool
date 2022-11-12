import { Component } from '@angular/core';
import { Global } from '../global';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    getFooterClass(): string {
        return Global.theme;
    }
}
