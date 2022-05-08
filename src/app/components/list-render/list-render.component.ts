import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/service/list.service';

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
  constructor(private listService: ListService) {}

  ngOnInit(): void {}
  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal ....');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
