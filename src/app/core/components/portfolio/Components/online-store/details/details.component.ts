import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router' 
// injeccion de dependecias, tipado 

import { ProductsService } from '../../../../products.service'  //esto es la injeccion de dependencias
import { articulos } from '../../../../articulos.model'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  producto: articulos;

  constructor(
    private route: ActivatedRoute, //injeccion de dependencias
    private productsService: ProductsService
  ) { }

  ngOnInit() {                    //recidir datos 
    //que los parametros que tenga dentro de la ruta los almacene dentro de la varaible
    //y que se suscriba 
    this.route.params.subscribe((params: Params)=> {
      console.log(params);
      const id = params.id;
      console.log(id);
      // en las siguiente linea en una constante almacenamos el valor y por medio del componente productService que tiene un metodo buscamos el articulo 
      // const producto= this.productsService.getgaleria(id);
      this.producto= this.productsService.getgaleria(id);
      // console.log(producto);
    });    
  }

}
