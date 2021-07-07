import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-template-with-angular';

  emailDate = '';
  emailSubject = '';
  emailContent = '';

  emailsEmpty = false;

  emails = [
    {
      date: '3:20pm',
      subject: 'All hands meeting',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus placeat harum explicabo, perferendis vitae alias?'
    },
    {
      date: 'Mar 2, 2021',
      subject: 'Linkedin daily feed',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolores amet incidunt excepturi, tempore placeat. Impedit sit ullam dolorum repellendus.'
    },
    {
      date: 'Mar 3, 2021',
      subject: 'Appointment reminder',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolores amet incidunt excepturi, tempore placeat. Impedit sit ullam dolorum repellendus.'
    }
  ];

  onDeleteEmail() {
    // Set emailsEmpty flag before deleting
    if (this.emails.length === 1) {
      this.emailsEmpty = true;
    }
    if (this.emails.length > 1) {
      this.emails.splice(0, 1);
    }
    
  }

}
