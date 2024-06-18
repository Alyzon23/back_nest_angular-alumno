import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { LayoutComponent } from './layout/layout.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { CarreraService } from './facultad/services/carrera.service';
import { FacultadModule } from './facultad/facultad.module';
import {TableModule} from 'primeng/table'
import { CursoService } from './facultad/services/curso.service';

@NgModule({
  declarations: [
    PerfilComponent,
    AlumnoComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppLayoutModule,
    TableModule,
    FacultadModule
  ],
  providers:[
    CarreraService,
    CursoService
  ]
})
export class AdminModule { }
