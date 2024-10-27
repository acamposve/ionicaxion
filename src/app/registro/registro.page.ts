import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit { 

  formData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    street: '',
    number: '',
    password: '',
    confirmPassword: '' // Agregado para enviar a la API
  };

  termsAccepted: boolean = false;
  confirmPhoneNumber: string = ''; // Agregado para la validación
  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async register() {
    if (!this.termsAccepted) {
      this.presentToast('Debes aceptar los términos y condiciones.', 'danger');
      return;
    }

    if (this.formData.password !== this.formData.confirmPassword) {
      this.presentToast('Las contraseñas no coinciden.', 'danger');
      return;
    }

    try {

      console.log(this.formData);
      const response = await this.http.post('https://amontefusco-002-site1.ktempurl.com/api/Auth/register', this.formData).toPromise();
      this.presentToast('Registro exitoso', 'success');
      this.navCtrl.navigateRoot('/login');
    } catch (error) {
      console.log(error);
      this.presentToast('Error al registrar, revise sus datos.', 'danger');
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
}
