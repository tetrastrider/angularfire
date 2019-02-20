import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service'
import { UsuarioModel } from '../../models/usuarios';
import { USUARIO_ANIMACION } from './usuarios.animacion';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  animations: [USUARIO_ANIMACION]
})

export class UsuariosComponent implements OnInit {
  p: number = 1;
  usuarios:UsuarioModel[];
  editar: boolean = false;
  editarUsuario: UsuarioModel;

  constructor(
    public usuariosService:UsuariosService
    ){}

  borrarUsuario(usuario):void{
    const confirmacion = confirm('Estas seguro de querer borrar?');
      if (confirmacion) {
        this.usuariosService.delUsuario(usuario);
      }
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

  getAllUsuarios(){
    this.usuariosService.getUsuarios().subscribe(us =>{
      this.usuarios = us;
  });}

  ngOnInit() { this.getAllUsuarios(); }

}

