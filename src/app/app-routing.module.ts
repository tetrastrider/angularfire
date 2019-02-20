import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FirebaseComponent } from './component/firebase/firebase.component';
import { OdooComponent } from './component/odoo/odoo.component';
import { ConfigurationComponent } from './component/configuration/configuration.component';
import { RegisterComponent } from './component/user/register/register.component';
import { LoginComponent } from './component/user/login/login.component';
//ACSESO
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { DetallesComponent } from './component/detalles/detalles.component';
import { Page404Component } from './component/page404/page404.component';
import { UsuariosFormUpdateComponent } from './component/usuarios/usuarios-form-update/usuarios-form-update.component';

const routes: Routes = [
	//{ path: '',   redirectTo: '/usuarios', pathMatch: 'full' },
{ path:'', component:DashboardComponent, data: { title: 'dashboard' } },
{ path:'firebase', component:FirebaseComponent, data: { title: 'firebase configuracion' } },
{ path:'odoo', component:OdooComponent, data: { title: 'odoo configuracion' } },
{ path:'configuracion', component:ConfigurationComponent, data: { title: 'configurar app' } },
{ path:'usuarios', component:UsuariosComponent, data: { title: 'control de usarios' } },
{ path:'detalles/:id', component:DetallesComponent, data: { title: 'datos de usuario' } },
{ path:'edituser/:id', component:UsuariosFormUpdateComponent, data: { title: 'editar usuario' } },
{ path: 'login', component:LoginComponent, data: { title: 'login' } },
{ path: 'register', component:RegisterComponent, data: { title: 'registro' } },
{ path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*,{ enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
