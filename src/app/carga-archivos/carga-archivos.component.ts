import { Component, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';
import { UploadSeviceService } from '../services/upload-sevice.service'

@Component({
  selector: 'app-carga-archivos',
  templateUrl: './carga-archivos.component.html',
  styleUrls: ['./carga-archivos.component.css']
})
export class CargaArchivosComponent implements OnInit {

  constructor( private service: UploadSeviceService  ) { }

  ngOnInit(): void {
  }

  archivos: any[] = [];
  mostrarMensaje: boolean = false;
  mostrarMensajeError: boolean = false;
  estaCargando: boolean = false;
  mensaje: string = '';

  cargarArchivos( evento: any ){
     let insumo = evento.target.files;
     let reader = new FileReader();
     this.mostrarMensaje = false;
     this.mostrarMensajeError = false;
     this.estaCargando = false;
     this.mensaje = '';

     reader.readAsDataURL(insumo[0]);
     reader.onloadend = () => {
        this.estaCargando = true;
        this.archivos.push(reader.result);
        this.service.subirArchivo(`${ insumo[0].name }`, reader.result).then( url =>{
          this.estaCargando = false;
          this.mensaje = 'Archivo Cargado Exitosamente!'; 
          this.mostrarMensaje = true;
        }).catch( error => {
          this.mostrarMensajeError = true;
          this.estaCargando = false;
          this.mensaje = `Se presento un error al cargar el archivo: ${ error }`;
        });
     }
  }

}
