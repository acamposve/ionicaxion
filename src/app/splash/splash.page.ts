// src/app/splash/splash.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit() {
    // Temporizador para simular carga de componentes (2 segundos)
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 2000); // Puedes ajustar el tiempo según lo necesites
  }
}
