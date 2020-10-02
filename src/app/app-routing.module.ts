import { RelogiosDeleteComponent } from './components/relogios/relogios-delete/relogios-delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelogiosUpdateComponent } from './components/relogios/relogios-update/relogios-update.component';
import { HomeComponent } from './views/home/home.component';
import { RelogiosComponent } from './views/relogios/relogios.component';

//import {} './views/home/home.component'

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "relogios", component: RelogiosComponent},
  {path: "relogios/atualizar/:id", component: RelogiosUpdateComponent},
  {path: "relogios/delete/:id", component: RelogiosDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
