import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { LoginCredentials } from '../../types/user';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastService } from '../../core/services/toast-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected accountService = inject(AccountService)
  protected toastService = inject(ToastService)
  private router = inject(Router)
  protected loginCredentials: LoginCredentials = {}

  login() {
    this.accountService.login(this.loginCredentials).subscribe({
      next: _ => {
        this.router.navigateByUrl('/users')
        this.loginCredentials = {}
      },
      error: error => {
        this.toastService.error(error.error)
        console.error(error)
      }
    })
  }

  logout() {
    this.accountService.logout()
    this.router.navigateByUrl('/')
  }
}
