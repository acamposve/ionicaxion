import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  phoneNumber: string = "";
  password: string = "";

  constructor(private apiService: ApiService, private alertController: AlertController) {}

  async login() {
    const loginData = {
      phoneNumber: this.phoneNumber,
      password: this.password
    };

    this.apiService.login(loginData).subscribe({
      next: async (response) => {
        if (response === 'Login successful.') {
          // Navegar al dashboard o página principal
          console.log('Login exitoso');
          // Aquí puedes redirigir a otra página, por ejemplo:
          // this.router.navigate(['/dashboard']);
        } else if (response === 'Invalid credentials.') {
          await this.showAlert('Credenciales inválidas');
        } else {
          await this.showAlert('Respuesta inesperada: ' + response);
        }
      },
      error: async (err) => {
        console.error('Error en el login:', err);
        await this.showAlert('Ocurrió un error. Inténtalo de nuevo más tarde.');
      }
    });
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Información',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
