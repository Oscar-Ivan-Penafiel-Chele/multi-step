import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './page/personal-info.component';

const routes: Routes = [
  {path: '', component: PersonalInfoComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalInfoRoutingModule { }
