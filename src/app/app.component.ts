import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { StartComponent } from '../pages/start/start.component';
import { GamreComponent } from '../pages/gamre/gamre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, StartComponent, GamreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'serve';
}
