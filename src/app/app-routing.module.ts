import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HausaufgabenComponent} from './hausaufgaben/hausaufgaben.component';
import {FachComponent} from './fach/fach.component';

const routes: Routes = [
    {path: '', redirectTo: '/hausaufgaben', pathMatch: 'full'},
    {path: 'hausaufgaben', component: HausaufgabenComponent},
    {path: 'faecher', component: FachComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
