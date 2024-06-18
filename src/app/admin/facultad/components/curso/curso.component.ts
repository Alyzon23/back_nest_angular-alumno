import { Component, OnInit, inject } from '@angular/core';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']  
})
export class CursoComponent  {

  private cursoService = inject(CursoService);

  cursos: any[] = [
    { paralelo: 'Primero', code: 'PR' },
    { paralelo: 'Segundo', code: 'SG' },
    { paralelo: 'Tercero', code: 'TR' },
    { paralelo: 'Cuarto', code: 'CR' },
    { paralelo: 'Quinto', code: 'QN' }
  ];

  curso: any[] = [];
  cols: any[] = [];
carreras: any[]|undefined;

  constructor() {
    this.cursoService.funListar().subscribe(
      (res: any) => {
        this.curso = res.data;
      }
    );
  }

  openNew() {
  }

  editarCurso(prod:any) {
  }

  eliminarCurso(prod:any) {

  }

}
