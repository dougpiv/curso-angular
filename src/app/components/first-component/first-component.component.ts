import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Douglas';
  age: number = 30;
  job: string = 'Programador';
  hobbies = ['Correr', 'Dormir', 'Estudar'];

  constructor() {}

  ngOnInit(): void {}
}
