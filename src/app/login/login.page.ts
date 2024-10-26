// src/app/login/login.page.ts
import { Component } from '@angular/core';
import { AuthService, LoginRequest } from '../auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  phoneNumber: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top'
    });
    toast.present();
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
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed:', error);
        this.presentToast('Login falló! Revise sus datos.', 'danger');
      }
    );
  }
}
