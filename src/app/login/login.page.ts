import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';
import { RecoverPasswordComponent } from '../recover-password/recover-password.component';
import { AuthService } from '../auth/data-access/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private modalCtrl: ModalController
  ) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: RecoverPasswordComponent,
    });
    await modal.present();
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top',
    });
    toast.present();
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  login() {
    const loginRequest = {
      email: this.email, // ✅ Usa "email" y "password" en minúscula
      password: this.password,
    };

    this.authService.logIn(loginRequest).subscribe(
      (response) => {
        if (response.error) {
          console.error('Login failed:', response.error);
          this.presentToast('Login falló! Revise sus datos.', 'danger');
          return;
        }

        console.log('Login successful:', response);
        this.presentToast('Login exitoso', 'success');

        const userName = response.data.user?.email ?? 'Usuario';
        this.authService.setUserName(userName);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login error:', error);
        this.presentToast('Error de conexión. Inténtelo de nuevo.', 'danger');
      }
    );
  }
}
