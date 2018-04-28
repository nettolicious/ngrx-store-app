import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { ThreadsService } from '../services/threads.service';

import { ApplicationState } from '../store/application-state';
import { UserThreadsLoadedAction, LoadUserThreadsAction } from '../store/actions';
import { Thread } from '../../../shared/model/thread';
import { ThreadSummaryVM } from './thread-summary.vm';
import { userNameSelector } from './userNameSelector';
import { mapStateToUnreadMessagesCounter } from './mapStateToUnreadMessagesCounter';
import { stateToThreadSummariesSelector } from './stateToThreadSummariesSelector';

@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.scss']
})
export class ThreadSectionComponent implements OnInit {

  userName$: Observable<string>;
  unreadMessagesCounter$: Observable<number>;
  threadSummaries$: Observable<ThreadSummaryVM[]>;

  constructor(private store: Store<ApplicationState>) {
    this.userName$ = store.select(userNameSelector);
    this.unreadMessagesCounter$ = store.map(mapStateToUnreadMessagesCounter);
    this.threadSummaries$ = store.select(stateToThreadSummariesSelector);
  }

  ngOnInit() {
    this.store.dispatch(new LoadUserThreadsAction());
    // this.threadsService.loadUserThreads()
    //   .subscribe(allUserData => {
    //     console.log('thread section init allUserData', allUserData);
    //     this.store.dispatch(new UserThreadsLoadedAction(allUserData));
    //   });
  }

}
