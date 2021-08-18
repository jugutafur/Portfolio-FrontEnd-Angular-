import { Injectable } from '@angular/core';
import { articulos } from '../models/articulos.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  galeria: articulos[]= [
    {
        id: '1',
        imagen: 'assets/projects/OnlineStore/galery/1.jpg',
        title: 'articulo',
        price: 45,
        descripcion: 'bla bla bla'
    },
    {
        id: '2',
        imagen: 'assets/projects/OnlineStore/galery/2.jpg',
        title: 'articulo',
        price: 45,
        descripcion: 'bla bla bla'
    },
    {
        id: '3',
        imagen: 'assets/projects/OnlineStore/galery/8.jpg',
        title: 'articulo',
        price: 45,
        descripcion: 'bla bla bla'
    },
    {
        id: '4',
        imagen: 'assets/projects/OnlineStore/galery/4.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '5',
        imagen: 'assets/projects/OnlineStore/galery/5.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '6',
        imagen: 'assets/projects/OnlineStore/galery/6.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '7',
        imagen: 'assets/projects/OnlineStore/galery/7.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '8',
        imagen: 'assets/projects/OnlineStore/galery/8.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '9',
        imagen: 'assets/projects/OnlineStore/galery/9.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '10',
        imagen: 'assets/projects/OnlineStore/galery/10.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '11',
        imagen: 'assets/projects/OnlineStore/galery/11.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '12',
        imagen: 'assets/projects/OnlineStore/galery/12.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '13',
        imagen: 'assets/projects/OnlineStore/galery/13.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '14',
        imagen: 'assets/projects/OnlineStore/galery/14.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '15',
        imagen: 'assets/projects/OnlineStore/galery/15.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '16',
        imagen: 'assets/projects/OnlineStore/galery/16.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '17',
        imagen: 'assets/projects/OnlineStore/galery/17.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '18',
        imagen: 'assets/projects/OnlineStore/galery/18.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '19',
        imagen: 'assets/projects/OnlineStore/galery/5.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    },
    {
        id: '20',
        imagen: 'assets/projects/OnlineStore/galery/20.jpg',
        title: 'articulo',
        price: 45, 
        descripcion: 'bla bla bla'
    }
]

  constructor() { }

  getAllgaleria(){
    return this.galeria;
  }

  getgaleria(id: string){
    return this.galeria.find( item=> id === item.id);
  }  
}
