import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { ApiService } from '../services/api.service';
import { ToastController } from '@ionic/angular'; // Importa ToastController

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
    this.apiService.login(loginData).subscribe(async response => {

      console.log('Response from API:', response); // <-- Agregado aquí
      if (response === 'Login successful.') { // Ajusta según tu respuesta
        this.router.navigate(['/home']); // Navega a la página home
      } else {
        // Muestra un toast con el error
        const toast = await this.toastController.create({
          message: response, // Usa el mensaje de error
          duration: 2000,
          color: 'danger' // Color del toast
        });
        toast.present();
      }
    });
  }
}
