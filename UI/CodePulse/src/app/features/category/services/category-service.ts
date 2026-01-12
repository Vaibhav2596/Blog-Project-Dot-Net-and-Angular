import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);
  private apiBaseUrl = 'https://localhost:44374';

  addCategory(category : {name:string,urlHandle:string}) {
    this.http.post<void>(`${this.apiBaseUrl}/api/Categories`,category)
  }
}
