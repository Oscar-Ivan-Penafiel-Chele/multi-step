import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'personal-information', pathMatch: 'full'},
  {
    path: 'personal-information', 
    title: 'Step 1 - Personal Information',
    loadChildren: () => import('./pages/content-card/pages/step-one').then(m => m.PersonalInfoModule)
  },
  {
    path: 'plan', 
    title: 'Step 2 - Select Plan',
    loadChildren: () => import('./pages/content-card/pages/step-two').then(m => m.PlanModule)
  },
  {
    path: 'add-ons', 
    title: 'Step 3 - AddOns',
    loadChildren: () => import('./pages/content-card/pages/step-tree').then(m => m.AddOnsModule)
  },
  {
    path: 'summary', 
    title: 'Step 4 - Summary',
    loadChildren: () => import('./pages/content-card/pages/step-four').then(m => m.SummaryModule)
  },
  {path: '**', redirectTo: 'personal-information', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
