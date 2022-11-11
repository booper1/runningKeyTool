import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
    }
}
