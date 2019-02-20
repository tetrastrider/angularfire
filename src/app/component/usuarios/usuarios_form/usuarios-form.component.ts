import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../../service/usuarios.service";
import { UsuarioModel } from '../../../models/usuarios';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  constructor(private usuarioService: UsuariosService) { }

  usuario = {} as UsuarioModel;

  ngOnInit() {
  }

  addUsuario() {
    if(this.usuario.name !== '' && this.usuario.userType != '' && this.usuario.email != '') {
      this.usuarioService.addUsuario(this.usuario);
      this.usuario = {} as UsuarioModel;
    }
  }

}
