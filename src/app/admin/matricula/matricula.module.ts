import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnoComponent } from './components/lista-alumno/lista-alumno.component';
import { NuevoAlumnoComponent } from './components/nuevo-alumno/nuevo-alumno.component';



@NgModule({
  declarations: [
    ListaAlumnoComponent,
    NuevoAlumnoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MatriculaModule { }
