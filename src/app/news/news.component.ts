import { Component, OnInit } from '@angular/core';
import { NEWS } from './news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news = NEWS;

  constructor() { }

  ngOnInit(): void {
  }

}
