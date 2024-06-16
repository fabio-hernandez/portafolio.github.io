import { Component } from '@angular/core';
import { CvComponent } from '../cv/cv.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CvComponent, PerfilComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  navegarACv() {
    this.router.navigate(['/cv']);
  }

  navegarAPerfil() {
    this.router.navigate(['/perfil']);
  }
}
