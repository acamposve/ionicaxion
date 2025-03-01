import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CategoriesComponent } from './categories.component';
import { NavController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';
import { of, throwError } from 'rxjs';

class MockNavController {
  navigateForward = jasmine.createSpy('navigateForward');
}

class MockProductService {
  getProducts = jasmine.createSpy('getProducts').and.returnValue(of([]));
}
