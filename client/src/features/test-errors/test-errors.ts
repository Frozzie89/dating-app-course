import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  imports: [],
  templateUrl: './test-errors.html',
  styleUrl: './test-errors.css'
})
export class TestErrors {

  private http = inject(HttpClient)
  baseUrlApi = 'http://localhost:5068/api/'

  get404Error() {
    this.http.get(this.baseUrlApi + 'buggy/not-found').subscribe({
      next: response => console.log(response),
      error: error => console.error(error)
    })
  }

  get400Error() {
    this.http.get(this.baseUrlApi + 'buggy/bad-request').subscribe({
      next: response => console.log(response),
      error: error => console.error(error)
    })
  }

  get500Error() {
    this.http.get(this.baseUrlApi + 'buggy/server-error').subscribe({
      next: response => console.log(response),
      error: error => console.error(error)
    })
  }

  get401Error() {
    this.http.get(this.baseUrlApi + 'buggy/auth').subscribe({
      next: response => console.log(response),
      error: error => console.error(error)
    })
  }

  get400ValidationError() {
    this.http.post(this.baseUrlApi + 'account/register', {}).subscribe({
      next: response => console.log(response),
      error: error => console.error(error)
    })
  }

}
