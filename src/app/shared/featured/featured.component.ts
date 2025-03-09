import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent  implements OnInit {
  featuredProducts: any[] = []; // Lo mismo para productos destacados
  constructor() { }

  ngOnInit() {   
    this.featuredProducts = [{ name: 'Título', imageUrl: '../assets/featured-bottom.png' }, { name: 'Título', imageUrl: '../assets/featured-bottom.png' } , { name: 'Título', imageUrl: '../assets/featured-bottom.png' }]; // Obtener de la API
}

}
