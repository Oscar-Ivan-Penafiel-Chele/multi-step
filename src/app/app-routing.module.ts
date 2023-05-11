import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'personal-information', pathMatch: 'full'},
  {path: 'personal-information', loadChildren: () => import('./pages/content-card/step-one').then(m => m.PersonalInfoModule)},
  {path: 'plan', loadChildren: () => import('./pages/content-card/step-two').then(m => m.PlanModule)},
  {path: 'add-ons', loadChildren: () => import('./pages/content-card/step-tree').then(m => m.AddOnsModule)},
  {path: 'summary', loadChildren: () => import('./pages/content-card/step-four').then(m => m.SummaryModule)},
  {path: '**', redirectTo: 'personal-information', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
