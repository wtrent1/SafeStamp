import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() { }

  ngOnInit() {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
    const link = document.querySelector('.navbar-start');
    const quoteButton = document.querySelector('.navbar-end');
    link.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
    quoteButton.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }

}
