import { Component } from '@angular/core';
import { Comp1Component } from '../../component/comp1/comp1.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Comp1Component],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/start']);
  }
}
