import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent implements OnInit {
  @Output() changeNumber2: EventEmitter<any> = new EventEmitter();
  myNumber: number = 0;
  constructor() {}

  ngOnInit(): void {}
  onChangeNumber() {
    this.changeNumber2.emit();
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
