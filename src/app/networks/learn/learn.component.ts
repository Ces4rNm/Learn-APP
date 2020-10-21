import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  numeros = ['1', '2', '3', '4', '5'];
  constructor() { }

  ngOnInit() {
  }
  
}
