import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahComponent } from './dah/dah.component';
import { ListefoyerComponent } from './listefoyer/listefoyer.component';
import { AddfoyerComponent } from './addfoyer/addfoyer.component';
import { AddtransportationComponent } from './addtransportation/addtransportation.component';
const routes: Routes = [
{
  path:"dah",component: DahComponent

},
{
  path:"listefoyer",component:ListefoyerComponent
},
{

  path:"addfoyer", component: AddfoyerComponent
},
{

  path:"addtransportation", component: AddtransportationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
