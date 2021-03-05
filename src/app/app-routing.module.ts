import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataprivacyComponent } from './dataprivacy/dataprivacy.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ManifestoComponent } from './manifesto/manifesto.component';

const routes: Routes = [
  {path: '', component: ManifestoComponent},
  { path: 'imprint', component: ImpressumComponent },
  { path: 'dataprivacy', component: DataprivacyComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
