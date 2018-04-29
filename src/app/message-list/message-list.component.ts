import {Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import {MessageVM} from "../message-section/message.vm";

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent  {

    @Input()
    messages: MessageVM[];


    constructor() {

    }

    ngOnInit() {

    }

}