import { Injectable } from '@angular/core';
import firebase  from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

firebase.initializeApp( environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class UploadSeviceService {

  constructor() { }

  storageReference = firebase.app().storage().ref();

  async subirArchivo( nombre:string, base64: any ){
    try {
      let response = await this.storageReference.child(`users/${ nombre }`).putString(base64, 'data_url');
      return await response.ref.getDownloadURL();
    } catch (error) {
      throw error;
    }
  }

}
