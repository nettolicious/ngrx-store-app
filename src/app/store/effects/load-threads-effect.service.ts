import { Injectable } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { Actions, Effect } from '@ngrx/effects';
import { LOAD_USER_THREADS_ACTION, LoadUserThreadsAction, UserThreadsLoadedAction, SelectUserAction, SELECT_USER_ACTION } from '../actions';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

@Injectable()
export class LoadThreadsEffectService {

  @Effect() userThreads$: Observable<Action> = this.actions$
    .ofType<LoadUserThreadsAction>(LOAD_USER_THREADS_ACTION)
    .debug("action received")
    .switchMap(action => this.threadsService.loadUserThreads(action.payload))
    .debug("data received via the http request")
    .map(allUserData => new UserThreadsLoadedAction(allUserData));

  @Effect() userSelected$ : Observable<Action> = this.actions$
    .ofType<SelectUserAction>(SELECT_USER_ACTION)
    .debug("User selected")
    .map(action => new LoadUserThreadsAction(action.payload));

  constructor(private actions$: Actions, private threadsService: ThreadsService) {

  }

}
