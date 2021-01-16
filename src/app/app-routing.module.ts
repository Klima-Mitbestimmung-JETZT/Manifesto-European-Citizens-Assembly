import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataprivacyComponent } from './dataprivacy/dataprivacy.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { LetterComponent } from './letter/letter.component';

const routes: Routes = [
  { path: 'imprint', component: ImpressumComponent },
  { path: 'dataprivacy', component: DataprivacyComponent },
  { path: '**', component: LetterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
