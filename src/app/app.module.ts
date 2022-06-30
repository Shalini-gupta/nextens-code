import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AdviceEffects } from './store/advice/advice.effect';
import { AdviceReducer } from './store/advice/advice.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AangiftenComponent } from './component/aangiften/aangiften.component';
import { ServiceberichtenComponent } from './component/serviceberichten/serviceberichten.component';
import { AdviceSignalComponent } from './component/advice-signal/advice-signal.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DossierComponent } from './dossier/dossier.component';
import { OverzichtComponent } from './overzicht/overzicht.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    AangiftenComponent,
    ServiceberichtenComponent,
    AdviceSignalComponent,
    DossierComponent,
    OverzichtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({advice: AdviceReducer}),
    EffectsModule.forRoot([AdviceEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
