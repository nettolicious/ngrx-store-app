import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThreadSummaryVM } from '../thread-section/thread-summary.vm';

@Component({
  selector: 'thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss']
})
export class ThreadListComponent implements OnInit {

  @Input() threads: ThreadSummaryVM[];
  @Input() currentSelectedThreadId: number;

  @Output() threadSelected = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  selectThread(threadId: number) {
    console.log("Thread selected", threadId);
    this.threadSelected.next(threadId);
  }
}
