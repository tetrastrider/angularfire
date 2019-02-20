
import { BrowserModule, Title }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
//COMPONENTS
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { FirebaseComponent } from './component/firebase/firebase.component';
import { OdooComponent } from './component/odoo/odoo.component';

import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { DetallesComponent } from './component/detalles/detalles.component';
import { ConfigurationComponent } from './component/configuration/configuration.component';
//ACSESO
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { Page404Component } from './component/page404/page404.component';
import { UsuarioFormComponent } from './component/usuarios/usuarios_form/usuarios-form.component';
import { UsuariosFormUpdateComponent } from './component/usuarios/usuarios-form-update/usuarios-form-update.component';
//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//ANIMACION
import { environment } from '../environments/environment';//ENTORNO

//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFirestoreModule,AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
//SERVICIOS
import { UsuariosService } from './service/usuarios.service';
//PAGINACION
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConfigurationComponent,
    FirebaseComponent,
    OdooComponent,
    SidebarComponent,
    HeaderComponent,
    UsuariosComponent,
    UsuarioFormComponent,
    DetallesComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    HeaderComponent,
    UsuariosFormUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),// imports firebase/app needed for everything
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    NgxPaginationModule//paginacion
  ],
  providers: [UsuariosService,AngularFireAuth,Title,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
