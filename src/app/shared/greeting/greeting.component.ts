import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/data-access/auth.service';


@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent  implements OnInit {
  userName: string | null = '';
  constructor(private authService: AuthService) { }

  ngOnInit() { 

    
  }

}
