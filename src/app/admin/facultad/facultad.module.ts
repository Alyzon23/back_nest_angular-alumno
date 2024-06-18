import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//import { ButtonModule } from 'primeng/button';
//import { DialogModule } from 'primeng/dialog';
//import { TableModule } from 'primeng/table';
//import { ToolbarModule } from 'primeng/toolbar';

// Importa los componentes que pertenecen a este módulo
import { CarreraComponent } from './components/carrera/carrera.component';
import { CursoComponent } from './components/curso/curso.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from '../../primeng/primeng.module';

@NgModule({
  declarations: [
    CarreraComponent,
    CursoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    //TableModule,
    //DialogModule,
     //ButtonModule,
     //InputTextModule,
    ReactiveFormsModule,
    //ToolbarModule,
    PrimengModule
  ]
})
export class FacultadModule { }
