import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CarreraComponent } from './facultad/components/carrera/carrera.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { CursoComponent } from './facultad/components/curso/curso.component';


const routes: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {
        path: "perfil",
        component: PerfilComponent
      },
      {
        path: "carrera",
        component: CarreraComponent
      },
      {
        path: "curso",
        component: CursoComponent
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
