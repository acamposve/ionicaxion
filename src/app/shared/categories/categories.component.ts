import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoriesService } from 'src/app/services/categories.service';


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
    this.categoriasService.getFirstCategory().subscribe((categoria) => {
      if (categoria) {
        this.categorias = [categoria];
      }
    });
  }
  
  viewMoreCategories() {
    this.navCtrl.navigateForward('/categories');
  }

  


}