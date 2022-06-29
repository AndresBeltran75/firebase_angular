import { Component, OnInit } from '@angular/core';
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

  cargarArchivos( evento: any ){
     let insumo = evento.target.files;
     let reader = new FileReader();

     reader.readAsDataURL(insumo[0]);
     reader.onloadend = () => {
        console.log(reader.result);
        this.archivos.push(reader.result);
        this.service.subirArchivo(`${ insumo[0].name }`, reader.result).then( url =>{
          console.log( 'Archivo Cargado Exitosamente!' );
          console.log( url );
        }).catch( error => {
          console.log( error )
        });
     }
  }

}
