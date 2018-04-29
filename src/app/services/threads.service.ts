import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AllUserData } from '../../../shared/to/all-user-data';

@Injectable()
export class ThreadsService {

  constructor(private http: HttpClient) { }

  loadUserThreads(userId: number): Observable<AllUserData> {
    console.log("threads service loadUserThreads for user", userId);
    let headers = new HttpHeaders().set('USERID', userId.toString());
    console.log("headers", headers);
    return this.http.get<AllUserData>('/api/threads', { headers: headers });
  }
}
