import { Injectable } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { Actions, Effect } from '@ngrx/effects';
import { LOAD_USER_THREADS_ACTION, LoadUserThreadsAction, UserThreadsLoadedAction } from '../actions';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

@Injectable()
export class LoadThreadsEffectService {

  @Effect() userThreads$: Observable<Action> = this.actions$
    .ofType<LoadUserThreadsAction>(LOAD_USER_THREADS_ACTION)
    .debug("action received")
    .switchMap(() => this.threadsService.loadUserThreads())
    .debug("data received via the http request")
    .map(allUserData => new UserThreadsLoadedAction(allUserData));

  constructor(private actions$: Actions, private threadsService: ThreadsService) {

  }

}
