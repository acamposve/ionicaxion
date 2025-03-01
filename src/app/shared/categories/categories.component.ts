import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})


export class CategoriesComponent  implements OnInit {
  categorias: any[] = [];


  constructor(
              private navCtrl: NavController, 
              private categoriasService: CategoriesService) { }

  ngOnInit() {    
    this.loadCategorias();
  }
  
  loadCategorias() {
    this.categoriasService.getCategorias().then((categorias) => {
      this.categorias = categorias;
    });
  }
  
  viewMoreCategories() {
    this.navCtrl.navigateForward('/categories');
  }

  


}