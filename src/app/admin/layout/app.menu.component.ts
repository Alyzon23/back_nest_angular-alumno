import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Administracion',
                items: [
                    { label: 'Admin', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
                    { label: 'Perfil', icon: 'pi pi-fw pi-home', routerLink: ['/admin/perfil'] }
                ]
            },
            {
                label: 'Facultad',
                items: [
                    { label: 'Carrera', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/carrera'] },
                    { label: 'Curso', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/curso'] }
                ]
            },
            {
                label: 'Matricula',
                items: [
                    { label: 'Lista alumnos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/matricula'], badge: 'NEW' },
                    { label: 'Nuevos alumnos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/matricula/nuevo'], badge: 'NEW' },
                    { label: 'Alumnos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/alumno'], target:'_blank'},
                    
                ]
            },
            {
                label: 'Roles y Usuarios',
                items: [
                    { label: 'Usuarios', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
                    { label: 'Roles', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            }
            
        ];
    }
}
