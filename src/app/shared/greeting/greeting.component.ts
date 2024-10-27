import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service'; // Asegúrate de que la ruta es correcta
@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent  implements OnInit {
  userName: string | null = '';
  constructor(private authService: AuthService) { }

  ngOnInit() { console.log("username " + this.authService.getUserName());   this.userName = this.authService.getUserName();}

}
