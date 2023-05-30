import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'personal-information', pathMatch: 'full'},
  {path: 'personal-information', loadChildren: () => import('./pages/content-card/pages/step-one').then(m => m.PersonalInfoModule)},
  {path: 'plan', loadChildren: () => import('./pages/content-card/pages/step-two').then(m => m.PlanModule)},
  {path: 'add-ons', loadChildren: () => import('./pages/content-card/pages/step-tree').then(m => m.AddOnsModule)},
  {path: 'summary', loadChildren: () => import('./pages/content-card/pages/step-four').then(m => m.SummaryModule)},
  {path: '**', redirectTo: 'personal-information', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
