import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../shared/data-access/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private _supabaseClient = inject(SupabaseService).supabaseClient;
  private storageBucket = 'Categorias';

  // Obtener todas las categorías
  async getCategorias() {
    try {
      // Obtener usuario autenticado
      const { data: userData, error: userError } = await this._supabaseClient.auth.getUser();
      if (userError) throw new Error(`Error al obtener usuario: ${userError.message}`);

      console.log('Usuario autenticado:', userData?.user);

      // Obtener todas las categorías
      const { data: categorias, error: categoriasError } = await this._supabaseClient
        .from('Categorias')
        .select('*');

      if (categoriasError) throw new Error(`Error al obtener las categorías: ${categoriasError.message}`);

      // Generar URLs firmadas en paralelo
      const categoriasConFotos = await Promise.all(
        categorias.map(async (categoria) => {
          if (!categoria.foto) return categoria; // Aquí corregido: `foto` en minúsculas

          try {
            const { data: signedData, error: signedError } = await this._supabaseClient
              .storage
              .from(this.storageBucket)
              .createSignedUrl(categoria.foto, 60);

            if (signedError) {
              console.error("Error al generar la URL firmada", signedError);
              return categoria; // Retorna sin modificar la foto en caso de error
            }

            return { ...categoria, foto: signedData?.signedUrl || categoria.foto }; // `foto` en minúsculas
          } catch (e) {
            console.error("Error inesperado al firmar la URL:", e);
            return categoria;
          }
        })
      );

      console.log("Categorías obtenidas:", categoriasConFotos);
      return categoriasConFotos;

    } catch (error) {
      console.error("Error en getCategorias:", error);
      return [];
    }
  }
}
