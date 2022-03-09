import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Productos } from 'src/app/models';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-set-productos',
  templateUrl: './set-productos.component.html',
  styleUrls: ['./set-productos.component.scss'],
})
export class SetProductosComponent implements OnInit {
  newProducto : Productos = {
    id:this.firestoreService.getId(),
    nombre: '',
    precioNormal: null,
    precioReducido: null,
    fecha: new Date,
    foto: ''
  };
  private path = 'Productos/';
  constructor(public menuControler: MenuController,
    public firestoreService: FirestoreService) { }

  ngOnInit() {}

  openMenu() {
    console.log('open menu');
    this.menuControler.toggle('principal');
  }
  guardarProducto(){
   
    
    ;
    this.firestoreService.createDoc(this.newProducto, this.path, this.newProducto.id);
  }
  
}
