import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  openedItemIndex = 0;
  constructor() {}

  ngOnInit(): void {}

  @Input() items: Array<{ title: string; content: string }> = [];
  onClick(index: number) {
    if (this.openedItemIndex === index) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
}
