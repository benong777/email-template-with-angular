import { Component, OnInit } from '@angular/core';
import { EmailManagementService } from './services/email-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmailManagementService]
})

export class AppComponent implements OnInit {
  newEmails: {  date: string,
                subject: string,
                content: string, 
                to: string,
                from: string } [] = [];

  title = 'email-template-with-angular';
  
  constructor(private emailManagementService: EmailManagementService) {
  }

  ngOnInit() {
    this.newEmails = this.emailManagementService.newEmails;
    this.inboxTotal = this.emailManagementService.inboxTotal;
  }

  inboxTotal = 0;
  trashTotal = 0;
  currEmailIndex = 0;
  emailsEmpty = false;
  
  onDeleteNewEmail() {
    this.emailManagementService.deleteNewEmail();
    this.currEmailIndex = this.emailManagementService.currEmailIndex;
    this.inboxTotal = this.emailManagementService.inboxTotal;
    this.trashTotal = this.emailManagementService.trashTotal;
    this.emailsEmpty = this.emailManagementService.emailsEmpty;
  }

  // Update selected email card data
  onEmailSelect(index: number) {
    this.currEmailIndex = index;
    this.emailManagementService.onEmailSelect(index);
  }

  onNewEmailSelect(index: number) {
    this.emailManagementService.onNewEmailSelect(index);
    this.currEmailIndex = index;
  }

}
