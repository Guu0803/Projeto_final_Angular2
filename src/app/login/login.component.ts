import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from "@angular/forms";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.minLength(6)]),
    password: new FormControl('', [Validators.minLength(8)])
  })
  login() {
    
  }
}
