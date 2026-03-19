import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  imports: [CommonModule],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})
export class Messages implements OnInit {
  messages: any[] = [];
  selectedMsg: any = null;
  showModal = false;

  constructor(
    private messageService: MessageService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    this.messageService.getMessages().subscribe({
      next: (data) => {
        this.messages = data;
        this.cdr.detectChanges();
      },
      error: (error) => console.error('Error fetching messages:', error),
    });
  }

  openMessage(msg: any) {
    this.selectedMsg = msg;
    this.showModal = true;
  }

  closeModal() {
    this.selectedMsg = null;
    this.showModal = false;
  }

  deleteMsg(id: string, event: Event) {
    event.stopPropagation();
    if (confirm('Are you sure you want to delete this message?')) {
      this.messageService.deleteMessage(id).subscribe(() => {
        this.messages = this.messages.filter((m) => m._id !== id);
        this.cdr.detectChanges();
      });
    }
  }
}
