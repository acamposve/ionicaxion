// src/app/login/login.page.ts
import { Component } from '@angular/core';
import { AuthService, LoginRequest } from '../auth.service';
import { Router } from '@angular/router';
import { ToastController, ModalController  } from '@ionic/angular';
import { RecoverPasswordComponent } from '../recover-password/recover-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  phoneNumber: string = '';
  password: string = '';
  message = 'This modal example uses the modalController to present and dismiss modals.';

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
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }


  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top'
    });
    toast.present();
  }



  navigateToRegister() {
    this.router.navigate(['/register']); // Navega a la página de registro
  }


  login() {
    const loginRequest: LoginRequest = {
      PhoneNumber: this.phoneNumber,
      Password: this.password,
    };

    this.authService.login(loginRequest).subscribe(
      response => {
        console.log('Login successful:', response);
        this.presentToast('Login exitoso', 'success');

        const userName = response.fullName; // Obtener el nombre del usuario
        this.authService.setUserName(userName); 
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed:', error);
        this.presentToast('Login falló! Revise sus datos.', 'danger');
      }
    );
  }
}
