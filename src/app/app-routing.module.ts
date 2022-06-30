import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaArchivosComponent } from './carga-archivos/carga-archivos.component';

const routes: Routes = [
  {path: 'home', component: CargaArchivosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
