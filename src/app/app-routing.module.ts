import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';

const routes: Routes = [
  {path: '', component:HomeComponent}, //Home
  {path: 'about', component: AboutComponent}, //sobre
  {path: 'moments/new', component: NewMomentComponent}, //Novo momento compartilhar
  {path: 'moments/edit/:id', component: EditMomentComponent}, //editar momento
  {path: 'moments/:id', component: MomentComponent}, //detalhes do momento
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//
