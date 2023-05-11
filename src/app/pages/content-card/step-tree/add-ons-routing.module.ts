import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOnsComponent } from './page/add-ons.component';

const routes: Routes = [
  {path: '', component: AddOnsComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOnsRoutingModule { }
