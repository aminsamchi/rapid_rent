import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username: string = '';
  password: string = '';
  email: string = '';
  user: any = null;
  authType: string = 'login';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  setAuthType(type: string) {
    this.authType = type;
  }

  login() {
    this.authService.login(this.email.trim(), this.password.trim()).subscribe(
      (response: any) => {
        if (response && response.user) {
          this.authService.setUser(response.user);
          this.user = response.user;
          this.username = '';
          this.password = '';
          this.email = '';
        } else {
          alert('Invalid credentials');
        }
      },
      (error: any) => {
        console.error('Login error', error);
        alert('Login failed, please try again');
      }
    );
  }

  signup() {
    this.authService.signup(
      this.username.trim(),
      this.email.trim(),
      this.password.trim()
    ).subscribe(
      (response: any) => {
        if (response && response.user) {
          this.authService.setUser(response.user);
          this.user = response.user;
          this.username = '';
          this.password = '';
          this.email = '';
        } else {
          alert('Signup failed, please try again.');
        }
      },
      (error: any) => {
        console.error('Signup error', error);
        if (error.status === 400) {
          alert('Invalid input: All fields are required.');
        } else if (error.status === 500) {
          alert('Server error, please try again later.');
        }
      }
    );
  }
  

  logout() {
    this.authService.logout();
    this.user = null;
  }
}
