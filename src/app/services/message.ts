import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private apiUrl = 'http://localhost:5000/api/messages';

  constructor(private http: HttpClient) {}

  getMessages() {
    return this.http.get<any>(this.apiUrl);
  }
  deleteMessage(id: String) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  sendMessage(data: any) {
    return this.http.post<any>(this.apiUrl, data);
  }
}
