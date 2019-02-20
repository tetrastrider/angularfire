import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from "@angular/router";
import { UsuariosService } from '../../../service/usuarios.service'
import { UsuarioModel } from '../../../models/usuarios';

@Component({
  selector: 'app-usuarios-form-update',
  templateUrl: './usuarios-form-update.component.html',
  styleUrls: ['./usuarios-form-update.component.css']
})
export class UsuariosFormUpdateComponent implements OnInit {

  usuarioid: Object;
  usuarios:UsuarioModel[];
  editar: boolean = true;
  editarUsuario: UsuarioModel;


  constructor(
  	public usuariosService:UsuariosService,
  	private route: ActivatedRoute,
    private router:Router,
    private firestore: AngularFirestore) {
  	this.route.params.subscribe(params => this.usuarioid = params.id);
     }

  getUsuario(Userid){
    return this.firestore.collection('users').doc(Userid).valueChanges()
  }

  editaUsuario(e,usuario) {
    this.editar = !this.editar;
    this.editarUsuario = usuario;
  }

  updusuario(usuario: UsuarioModel) {
    this.usuariosService.updateUsuario(this.editarUsuario);
    this.editarUsuario = {} as UsuarioModel;
    this.editar = false;
  }

  back(){
    this.router.navigate(['/usuarios']);
  }     

  ngOnInit() {
  	   this.getUsuario(this.usuarioid).subscribe(
      data => this.usuarioid = data 
    );
  	  
  }

}
