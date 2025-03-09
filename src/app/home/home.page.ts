import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { ProductService } from '../services/product.service'; 
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: any[] = []; 
  categorias: any[] = []; 

  
  constructor(
    private navCtrl: NavController, 
    private productService: ProductService,
    private categoryService: CategoriesService
  ) {}
  image:any;
  ngOnInit() {
    // Aquí podrías obtener los datos de usuario y productos de tu API
    
    this.loadProducts();
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getFirstCategory().subscribe(
      (data) => {
        // Verifica si la respuesta es un array o convierte el objeto en un array
        if (!Array.isArray(data)) {
          console.warn('Se esperaba un array, pero se recibió un objeto. Convirtiendo a array.');
          this.categorias = [data]; // Convierte el objeto en un array
        } else {
          this.categorias = data;
        }
  
        console.log("Categorías obtenidas:", this.categorias);
      },
      (error) => {
        console.error('Error al cargar categorías:', error);
      }
    );
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
