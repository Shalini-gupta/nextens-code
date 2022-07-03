import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AdviceEffects } from './store/advice/advice.effect';
import { AdviceReducer } from './store/advice/advice.reducer';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AangiftenComponent } from './component/aangiften/aangiften.component';
import { ServiceberichtenComponent } from './component/serviceberichten/serviceberichten.component';
import { AdviceSignalComponent } from './component/advice-signal/advice-signal.component';
import { DossierComponent } from './component/dossier/dossier.component';
import { OverzichtComponent } from './component/overzicht/overzicht.component';
import { environment } from '../environments/environment';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({ advice: AdviceReducer }),
    EffectsModule.forRoot([AdviceEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
