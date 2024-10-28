import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';






@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent  implements OnInit {
  products: any[] = []; // Aquí deberías obtener la lista de productos de tu API
  private baseUrl = 'https://amontefusco-002-site1.ktempurl.com/';
  constructor(private navCtrl: NavController, private productService: ProductService) { }

  ngOnInit() {    this.loadProducts();}
  
  
  
  viewMoreCategories() {
    this.navCtrl.navigateForward('/categories');
  }

  getImageUrl(imagePath: string): string {
    return `${this.baseUrl}${imagePath}`;
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
}
