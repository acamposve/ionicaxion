import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { ProductService } from '../services/product.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: any[] = []; // Aquí deberías obtener la lista de productos de tu API
  featuredProducts: any[] = []; // Lo mismo para productos destacados
  private baseUrl = 'https://amontefusco-002-site1.ktempurl.com/';
  constructor(private navCtrl: NavController, private productService: ProductService) {}
  image:any;
  ngOnInit() {
    // Aquí podrías obtener los datos de usuario y productos de tu API
    this.image ="https://material.angular.io/assets/img/examples/shiba1.jpg";
    this.loadProducts();
    this.featuredProducts = [{ name: 'Destacado 1', imageUrl: '../assets/dest1.png' }, { name: 'Destacado 2', imageUrl: '../assets/dest2.png' }]; // Obtener de la API
  }


  loadProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error al cargar productos', error);
      }
    );
  }
  openMenu() {
    // Lógica para abrir el menú
  }

  goToCart() {
    this.navCtrl.navigateForward('/cart');
  }
  getImageUrl(imagePath: string): string {
    return `${this.baseUrl}${imagePath}`;
  }
  viewMoreCategories() {
    this.navCtrl.navigateForward('/categories');
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home');
  }

  goToCategories() {
    this.navCtrl.navigateForward('/categories');
  }

  goToDelivery() {
    this.navCtrl.navigateForward('/delivery');
  }
}
