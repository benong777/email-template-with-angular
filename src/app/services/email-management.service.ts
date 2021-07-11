export class EmailManagementService {
    newEmails = [
        {
            date: '3:20pm',
            subject: 'Test 1: All hands meeting',
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

    currEmailIndex = 0;
    emailsEmpty = false;
    trashTotal = 0;

    inboxTotal = this.newEmails.length;

    deleteNewEmail() {
        // Max index is the length of the emails
        let max = this.newEmails.length -1;
    
        // When the selected email is at index 0
        if (this.currEmailIndex === 0) {
          if (max === 0) {
            // If max === 0, there are no emails
            this.emailsEmpty = true;
          }
            // Delete email and keep index at 0
            this.newEmails.splice(this.currEmailIndex, 1);
            this.currEmailIndex = 0;
        }
    
        // If selected email index is > 0, delete and decrement the index
        else if (this.currEmailIndex >= 0) {
          this.newEmails.splice(this.currEmailIndex, 1);
          this.currEmailIndex -= 1;
        }
    
        // Update inbox/trash total
        this.inboxTotal = this.newEmails.length;
        this.trashTotal += 1;
      }
 
    // Update selected email card data
    onEmailSelect(index: number) {
        // this.currEmailIndex = index;
        // this.emailDate = this.emails[index].date;
        // this.emailSubject = this.emails[index].subject;
        // this.emailContent = this.emails[index].content;
        // this.emailTo = this.emails[index].to;
        // this.emailFrom = this.emails[index].from;
        //console.log(index);
    }

    onNewEmailSelect(index: number) {
        this.currEmailIndex = index;
        console.log('newEmail Selected: ' + index);
    }

    printLog(message: number) {
        console.log(message);
    }
}