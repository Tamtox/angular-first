import { Component } from '@angular/core';
import { MessagesService } from '@/app/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  constructor(public messageService: MessagesService) {}
}
