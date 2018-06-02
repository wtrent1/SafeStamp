import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  // @cmckni3 Your node.js server and ng application will be running at different
  // locations in development so a relative URL won't work here
  // This could be changed to http://localhost:3000
  // for now but that won't work in production and it's not configurable

  // @cmckni3 Removed httpOptions as well since HttpClient sets that as the default
  // Content-Type and sends JSON by default
  sendEmail(emailBody) {
    return this.http.post('https://mysterious-ravine-18122.herokuapp.com/api/email', emailBody);
  }
}
