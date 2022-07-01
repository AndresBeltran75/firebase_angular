import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaArchivosComponent } from './carga-archivos/carga-archivos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'carga-archivos', component: CargaArchivosComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
