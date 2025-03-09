import { inject, Injectable } from '@angular/core';
import { AuthResponse, SignInWithPasswordCredentials } from '@supabase/supabase-js';
import { SupabaseService } from 'src/app/shared/data-access/supabase.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _supabaseClient = inject(SupabaseService).supabaseClient;

  logIn(credentials: SignInWithPasswordCredentials): Observable<AuthResponse> {
    return from(this._supabaseClient.auth.signInWithPassword(credentials));
  }

  setUserName(name: string) {
    localStorage.setItem('userName', name);
  }

  async registerUser(userData: any) {
    // Registrar usuario en Supabase Auth
    const { data, error } = await this._supabaseClient.auth.signUp({
      email: userData.email,
      password: userData.password,
    });
  
    if (error) {
      throw error;
    }
  
    // Insertar datos adicionales en la tabla profile
    const userId = data.user?.id;
    if (userId) {
      const { error: profileError } = await this._supabaseClient
        .from('profiles')
        .insert({
          id: userId, // Relación con el usuario en auth
          first_name: userData.firstName,
          last_name: userData.lastName,
          phone: userData.phoneNumber,
          street: userData.street,
          number: userData.number,
        });
  
      if (profileError) {
        throw profileError;
      }
    }
  
    return data;
  }
  
}
