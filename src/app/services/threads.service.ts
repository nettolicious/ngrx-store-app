import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AllUserData } from '../../../shared/to/all-user-data';

@Injectable()
export class ThreadsService {

  constructor(private http: HttpClient) { }

  loadUserThreads(): Observable<AllUserData> {
    return this.http.get<AllUserData>('/api/threads');
  }
}
