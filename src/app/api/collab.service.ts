import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollabService {
  
  url = 'http://localhost:8000/docs/common'

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<any>(this.url)
  }
}
