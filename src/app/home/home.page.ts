import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fullName: string;
  constructor() {

    this.fullName = localStorage.getItem('fullName') || '';
 
  }

}
