import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  cursos: any[] = [];
  isAdmin: boolean = false;
  isGeneral: boolean = false;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    // Al cargar la página, obtén todos los cursos
   
  }

  

  

  
}