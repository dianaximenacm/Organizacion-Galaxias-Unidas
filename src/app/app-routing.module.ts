import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { ContentComponent } from "./components/content/content.component";
import { GalaxiasComponent } from "./components/galaxias/galaxias.component";
import { ElipticasComponent } from "./components/elipticas/elipticas.component";
import { IrregularesComponent } from "./components/irregulares/irregulares.component";
import {ContactoComponent} from "./components/contacto/contacto.component";

const Routes: Routes =[
    {path: '', component: ContentComponent},
    {path: 'galaxias', component : GalaxiasComponent},
    {path: 'elipticas', component : ElipticasComponent},
    {path: 'irregulares', component : IrregularesComponent},
    {path: 'contacto', component : ContactoComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(Routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}


