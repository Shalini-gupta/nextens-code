import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AangiftenComponent } from './component/aangiften/aangiften.component';
import { ServiceberichtenComponent } from './component/serviceberichten/serviceberichten.component';
import { AdviceSignalComponent } from './component/advice-signal/advice-signal.component';
import { DossierComponent } from './dossier/dossier.component';
import { OverzichtComponent } from './overzicht/overzicht.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aangiften', component: AangiftenComponent },
  { path: 'serviceberichten', component: ServiceberichtenComponent },
  { path: 'advice-signal', component: AdviceSignalComponent },
  { path: 'dossier', component: DossierComponent },
  { path: 'overzicht', component: OverzichtComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
