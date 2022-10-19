import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input('class') classNames = '';
  @Input() data: Array<{ name: string; job: string; age: number }> = [];
  @Input() headers: Array<{ key: 'name' | 'job' | 'age'; label: string }> = [];
  constructor() {}

  ngOnInit(): void {}
}
