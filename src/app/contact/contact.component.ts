import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { EmailService } from '../email.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  onSubmit(drop, name, email, phone, message) {
    const emailBody = {drop, name, email, phone, message};
    console.log(emailBody);
    this.emailService.sendEmail(emailBody).subscribe(
      // error => {
      //   console.error('Error Sending Email');
      //   return throwError(error);
      // })
      success => {
        console.log(success);
      });
  }
}
