import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HausaufgabenComponent} from './hausaufgaben/hausaufgaben.component';
import {FachComponent} from './fach/fach.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule
    ],
    declarations: [
        AppComponent,
        HausaufgabenComponent,
        FachComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
