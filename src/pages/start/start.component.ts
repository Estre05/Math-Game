import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Comp1Component } from '../../component/comp1/comp1.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [Comp1Component],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  constructor(private router: Router) {}

  ngOnInit() {
  
    const buttons = document.querySelectorAll('.game-button');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.router.navigate(['/game']);
      });
    });
  }

}
