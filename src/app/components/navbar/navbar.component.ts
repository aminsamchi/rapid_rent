import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  authType: 'login' | 'signup' = 'login';

  @Input() authRef: any;  // This allows AppComponent to pass the reference of AuthComponent to NavbarComponent.

  setAuthType(type: 'login' | 'signup') {
    this.authType = type;
    if (this.authRef) {
      this.authRef.setAuthType(type); // Pass the auth type to the AuthComponent via authRef.
    }
  }
}
