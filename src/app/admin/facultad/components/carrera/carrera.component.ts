import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'
import { CarreraService } from '../../services/carrera.service';

interface Carrera {
  id: number,
  nombre: string;
  descripcion: string
}
@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.scss'
})
export class CarreraComponent implements OnInit {

  private carreraService = inject(CarreraService)

  carreras: Carrera[]=[]
  dialog_visible: boolean=false;
  carrera_id:number=-1; 


  carreraForm= new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl('')
  });

  ngOnInit(): void {
    this.getCarreras()
  }

  getCarreras(){
    this.carreraService.funListar().subscribe(
      (res:any)=>{
        this.carreras=res;
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  mostrarDialog(){
    this.dialog_visible=true
  }

  guardarCarrera()
  {
    if(this.carrera_id>0)
      {
        this.carreraService.funModificar(this.carrera_id, this.carreraForm.value).subscribe(
          (res:any)=>
            {
              this.dialog_visible=false;
              this.getCarreras();
              this.carrera_id=-1;
              this.alerta("ACTUALIZADO","La carrera se modifico con éxito!","success")
            },
            (error:any)=>
            {
              this.alerta("ERROR AL ACTUALIZAR","Verifica lo datos!","error")
            }
            
        );  
        this.carreraForm.reset();
      }
    else
    {
      this.carreraService.funGuardar(this.carreraForm.value).subscribe(
        (res:any)=>
        {
          this.dialog_visible=false;
          this.getCarreras();
          this.alerta("REGISTRADO","La carrera se creó con éxito!","success")
          
        }
      ),
      (error:any)=>{
        this.alerta("ERROR AL REGISTRADO","Verifica lo datos!","error")
      }
    this.carreraForm.reset();
    }
  }

  editarCarrera(car:Carrera){
    this.dialog_visible=true
    this.carrera_id=car.id
    this.carreraForm.setValue({nombre: car.nombre, descripcion: car.descripcion})
  }
  eliminarCarrera(car:Carrera){
    Swal.fire({
      title: "¿Está seguro de eliminar la carrera?",
      text: "Una vez eliminado no se podrá recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.carreraService.funEliminar(car.id).subscribe(
          (res:any)=>{
            this.alerta("ELIMINADO!","Carrera eliminada.","success")
            
            this.getCarreras();
            this.carrera_id=-1
          },
          (error:any)=>{
            this.alerta("ERROR!","Error al intentar eliminar.","error")
            
          }
        )
        
      }
    });
  }
  alerta(title:string, text:string, icon:'success'|'error'|'info'|'question'){
    Swal.fire({title,text,icon});
     // title: title,
    //  text: text,
     // icon: icon
    
  }
}