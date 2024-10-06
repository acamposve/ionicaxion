import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { ApiService } from '../services/api.service';
import { ToastController } from '@ionic/angular'; // Importa ToastController
import { LoginResponse } from '../models/login-response.model'; // Asegúrate de que la ruta sea correcta


// Define la interfaz aquí
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  phoneNumber: string = "";
  password: string = "";

  constructor(
    private apiService: ApiService,
    private router: Router, // Inyecta Router
    private toastController: ToastController // Inyecta ToastController
  ) {}

  async login() {
    const loginData = {
      phoneNumber: this.phoneNumber,
      password: this.password
    };


    console.log('LoginData from API:', loginData); // <-- Agregado aquí

    console.log('Login Data:', JSON.stringify(loginData));
    this.apiService.login(loginData).subscribe(async (response: LoginResponse) => {
      console.log('Response from API:', response);
      if (response && response.message === 'Login successful.') {
        // Almacena el nombre completo del usuario en localStorage
        localStorage.setItem('fullName', response.fullName);

        this.router.navigate(['/home']); // Navega a la página home
      } else {
        // Muestra un toast con el error
        const toast = await this.toastController.create({
          message: response.message || 'Error al iniciar sesión',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    });
  }
}
