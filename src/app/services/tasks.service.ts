import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from 'src/app/models/tasks';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  apiUrl = 'https://ecsdevapi.nextline.mx/vdev/tasks-challenge';
  token = 'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd'

  constructor(private http: HttpClient) { }

  postTasks(task: Tasks): Observable<any> {
    const head: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${this.token}`
    });
    
    return this.http.post(`${this.apiUrl}/tasks`, task, {headers: head});
  }

  getTasks(): Observable<any> {
    const head: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(`${this.apiUrl}/tasks`, {headers: head});
  }

  getTask(id: number): Observable<any> {
    const head: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(`${this.apiUrl}/tasks/${id}`, {headers: head});
  }

  putTask(id: number, task:Tasks): Observable<any> {
    const head: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.put(`${this.apiUrl}/tasks/${id}`, task, {headers: head});
  }

  delTask(id: number): Observable<any> {
    const head: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.delete(`${this.apiUrl}/tasks//${id}?Token=${this.token}`, {headers: head});
  }
}