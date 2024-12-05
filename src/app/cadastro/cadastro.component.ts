import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from "@angular/forms";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastrar() {
    
  }
  form = new FormGroup({
    username: new FormControl('', [Validators.minLength(6)]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(8)])
  })
}
