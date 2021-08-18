import { Component } from '@angular/core';
import Swiper  from 'swiper';

@Component({
  selector: 'app-online-store',
  templateUrl: './online-store.component.html',
  styleUrls: ['./online-store.component.scss']
})
export class OnlineStoreComponent {

  mySwiper: Swiper;


  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container',{
        navigation: {
            nextEl:'.swiper-button-next',
            prevEl:'swiper-button-prev'
        }
    });
}

}
