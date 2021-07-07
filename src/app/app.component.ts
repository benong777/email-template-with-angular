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

  currEmailIndex = 0;
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
    if (this.currEmailIndex > 0) {
      this.emails.splice(this.currEmailIndex, 1);
      this.currEmailIndex -= 1;
    }

    // //Set emailsEmpty flag before deleting
    // if (this.emails.length === 0) {
    //   this.emailsEmpty = true;
    // }

    // else if (this.emails.length === 1) {
    //   this.emails.splice(this.currEmailIndex, 1);
    //   this.emailsEmpty = true;
    // }
    // else {  // this.emails.length > 1
    //   this.emails.splice(this.currEmailIndex, 1);
    //   if (this.currEmailIndex === 1) {
    //     this.currEmailIndex = 0;
    //   }
    //   else {
    //     this.currEmailIndex += 1;
    //     if (this.currEmailIndex > (this.emails.length-1)) {
    //       this.currEmailIndex = this.emails.length -1;
    //     }
    //   }
    // }
    console.log(this.currEmailIndex);

    // get length
    // max = length - 1
    // min = 0

    // if num == 0
          // if max == 0; empty
          // else splice, num = 0;
    // if num > 0
          // if num <= max, splice, num -= 1;
  }
  onEmailSelect(index: number) {
    console.log("Email selected: " + index);
    this.currEmailIndex = index;
    this.emailDate = this.emails[index].date;
    this.emailSubject = this.emails[index].subject;
    this.emailContent = this.emails[index].content;
  }

}
