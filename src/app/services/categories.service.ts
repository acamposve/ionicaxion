import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../shared/data-access/supabase.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private _supabaseClient = inject(SupabaseService).supabaseClient;
  private storageBucket = 'Categorias';

  getFirstCategory(): Observable<any | null> {
    return from(
      this._supabaseClient
        .from('Categorias')
        .select('id, nombre, descripcion, foto')
        .order('id', { ascending: true })
        .limit(1)
        .then(({ data, error }) => {
          if (error) {
            console.error("Error en la consulta:", error);
            return null;
          }
  
          console.log("Datos obtenidos de Supabase:", data);
          return data.length > 0 ? data[0] : null;
        })
    );
  }
  

  

  
  
}
