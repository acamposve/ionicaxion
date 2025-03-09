import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { SupabaseService } from '../shared/data-access/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private _supabaseClient = inject(SupabaseService).supabaseClient;
  constructor() {}

  getProducts(): Observable<any[]> {
    const query = this._supabaseClient
      .from('Productos')
      .select('nombre, descripcion, precio, destacada, foto, categoria_id, Categorias(nombre)');

    return from(query.then(({ data, error }) => {
      if (error) {
        console.error('Error obteniendo productos:', error.message);
        return [];
      }
      return data || [];
    }));
  }
}
