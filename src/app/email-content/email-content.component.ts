import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-content',
  templateUrl: './email-content.component.html',
  styleUrls: ['./email-content.component.css']
})
export class EmailContentComponent implements OnInit {
  @Input() emailsEmptyFlag: boolean = false;
  @Input() currEmail = {  date: '', 
                          subject: '', 
                          content: '', 
                          to: '', 
                          from: '' };
  @Output() deleteEmailEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteEmail() {
    this.deleteEmailEvent.emit();
  }  

}
