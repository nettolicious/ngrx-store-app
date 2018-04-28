import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from "ngrx-store-freeze";

import { ThreadsService } from './services/threads.service';

import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { INITIAL_APPLICATION_STATE, ApplicationState } from './store/application-state';

import { uiState } from "./store/reducers/uiStateReducer";
import { storeData } from "./store/reducers/storeDataReducer";

export const reducers = {
  uiState,
  storeData,
  routerReducer: fromRouter.routerReducer
};

export const metaReducers = [storeFreeze];

@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    MessageSectionComponent,
    ThreadSectionComponent,
    ThreadListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers, initialState: INITIAL_APPLICATION_STATE })
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
