import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { UsuarioModel } from '../models/usuarios'
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import { table } from '../appconfig/database';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuariosColeccion:AngularFirestoreCollection<UsuarioModel>;//for id
  usuarios:Observable<UsuarioModel[]>//for all
  usuarioDoc:AngularFirestoreDocument<UsuarioModel>;// for del
  usuario:Observable<UsuarioModel>;

  constructor(public db:AngularFirestore) {}

   getUsuarios() {
    this.usuariosColeccion = this.db.collection<UsuarioModel>(table.usersData);
    return this.usuarios = this.usuariosColeccion.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as UsuarioModel;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  
    
  getusuario(id: string) {
    this.usuarioDoc = this.db.doc<UsuarioModel>(`${table.usersData}/${id}`);
    return this.usuario = this.usuarioDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as UsuarioModel;
        data.id = action.payload.id;
        return data;
      }
    }));
  }


   delUsuario(usuario:UsuarioModel){
    this.usuarioDoc = this.db.doc<UsuarioModel>(`${table.usersData}/${usuario.id}`);
    this.usuarioDoc.delete();
   }

   addUsuario(usuario:UsuarioModel){
    this.usuariosColeccion.add(usuario);
   }

  updateUsuario(usuario:UsuarioModel):void {
    this.usuarioDoc = this.db.doc<UsuarioModel>(`${table.usersData}/${usuario.id}`);
    this.usuarioDoc.update(usuario);
  }

  buscar(c1,op,c2) {
    this.usuariosColeccion = this.db.collection(table.usersData, ref => ref.where(c1,op,c2));
    return this.usuarios = this.usuariosColeccion.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as UsuarioModel;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  ngOnDestroy(): void {

  
  }

}
