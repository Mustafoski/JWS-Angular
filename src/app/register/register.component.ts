import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUserData = { email: '', password: '' };

  constructor(
    private http: HttpClient,
    private router: Router,
    private _auth: AuthService
  ) {}
  ngOnInit(): void {}

  registerUser(): void {
    this._auth.registerUser(this.registerUserData).subscribe((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/special']);
    });
  }
}
