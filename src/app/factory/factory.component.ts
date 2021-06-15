import { Component, OnInit, Input } from '@angular/core';
import {IFactory} from '../interfaces/factory';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {

  @Input() factory:IFactory = {address: "", country: "", division: "", id: 0, name: ""};

  constructor() { }

  ngOnInit(): void {
  }

}
