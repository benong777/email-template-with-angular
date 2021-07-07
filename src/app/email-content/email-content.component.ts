import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-content',
  templateUrl: './email-content.component.html',
  styleUrls: ['./email-content.component.css']
})
export class EmailContentComponent implements OnInit {
  @Input() emailsEmptyFlag: boolean = false;
  @Input() currEmailIdx: number = 0;
  @Input() currEmail = {  date: '', 
                          subject: '', 
                          content: '', 
                          to: '', 
                          from: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
