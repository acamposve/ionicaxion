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
}
