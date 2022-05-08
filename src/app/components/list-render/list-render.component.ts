import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'coco', type: 'dog', age: 10 },
    { name: 'auau', type: 'cat', age: 5 },
    { name: 'bigboy', type: 'hipo', age: 13 },
  ];

  animalDetails = '';
  constructor() {}

  ngOnInit(): void {}
  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}
