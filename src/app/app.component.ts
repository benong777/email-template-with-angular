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
  emailTo = '';
  emailFrom = '';

  currEmailIndex = 0;
  emailsEmpty = false;

  emails = [
    {
      date: '3:20pm',
      subject: 'All hands meeting',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus placeat harum explicabo, perferendis vitae alias?',
      to: 'alex@gmail.com',
      from: 'beth@gmail.com'
    },
    {
      date: 'Mar 2, 2021',
      subject: 'Linkedin daily feed',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolores amet incidunt excepturi, tempore placeat. Impedit sit ullam dolorum repellendus.',
      to: 'chris@gmail.com',
      from: 'dave@gmail.com'
    },
    {
      date: 'Mar 3, 2021',
      subject: 'Appointment reminder',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolores amet incidunt excepturi, tempore placeat. Impedit sit ullam dolorum repellendus.',
      to: 'emily@gmail.com',
      from: 'felicia@gmail.com'
    }
  ];


  onDeleteEmail() {
    // Max index is the length of the emails
    let max = this.emails.length -1;

    // When the selected email is at index 0
    if (this.currEmailIndex === 0) {
      // If max === 0, there's no more emails
      if (max === 0) this.emailsEmpty = true;
      else {
        // Delete email and keep index at 0
        this.emails.splice(this.currEmailIndex, 1);
        this.currEmailIndex = 0;
      }
    }

    // If selected email index is > 0, delete and decrement the index
    else if (this.currEmailIndex > 0) {
      this.emails.splice(this.currEmailIndex, 1);
      this.currEmailIndex -= 1;
    }
  }

  // Update selected email card data
  onEmailSelect(index: number) {
    this.currEmailIndex = index;
    this.emailDate = this.emails[index].date;
    this.emailSubject = this.emails[index].subject;
    this.emailContent = this.emails[index].content;
  }

}
