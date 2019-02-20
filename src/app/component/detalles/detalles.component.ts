import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})

export class DetallesComponent implements OnInit {

   usuario: Object;


  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private firestore: AngularFirestore
    ){
    this.route.params.subscribe(params => this.usuario = params.id);
  }



  getUsuario(Userid){
    return this.firestore.collection('users').doc(Userid).valueChanges()
  }

  back(){
    this.router.navigate(['/usuarios']);
  }

  ngOnInit() {
    this.getUsuario(this.usuario).subscribe(
      data => this.usuario = data 
     
    );
  
  }


}
