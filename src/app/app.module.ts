import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { GalaxiasComponent } from './components/galaxias/galaxias.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IrregularesComponent } from './components/irregulares/irregulares.component';
import { ElipticasComponent } from './components/elipticas/elipticas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    GalaxiasComponent,
    ContactoComponent,
    IrregularesComponent,
    ElipticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
