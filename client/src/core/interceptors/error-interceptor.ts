import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { ToastService } from '../services/toast-service';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const toastService = inject(ToastService)
  const router = inject(Router)

  return next(req).pipe(
    catchError(error => {
      if (error) {
        switch (error.status) {
          case 400:
            toastService.error('Bad request')
            break;

          case 401:
            toastService.error('Unauthorized')
            break;

          case 404:
            toastService.error('Not found')
            break;

          case 500:
            toastService.error('Server error')
            break;

          default:
            toastService.error('Something went wrong')
            break;
        }
      }

      throw error

    })
  )
};
