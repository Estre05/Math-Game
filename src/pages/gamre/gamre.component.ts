import { Component } from '@angular/core';
import { Comp1Component } from '../../component/comp1/comp1.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gamre',
  standalone: true,
  imports: [Comp1Component],
  templateUrl: './gamre.component.html',
  styleUrl: './gamre.component.css'
})
export class GamreComponent {

  constructor(private router: Router) {}

  
  ngOnInit() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
      option.addEventListener('click', () => {
        if (option.classList.contains('correct')) {
          this.router.navigate(['/login']);
        }
      });
    });
  }
}
