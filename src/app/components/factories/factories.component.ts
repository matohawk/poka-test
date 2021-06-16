import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {IFactory} from '../../interfaces/factory';
import {ViewportScroller} from '@angular/common';
import {FactoriesService} from '../../services/factories.service';

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})

export class FactoriesComponent implements OnInit {

  public factories: Array<IFactory>;
  public next: string;
  public loading: boolean;

  constructor(private viewportScroller: ViewportScroller, private Factories: FactoriesService) {
    this.factories = [];
    this.next = "";
    this.loading = false;
  }

  ngOnInit(): void {
    this.Factories.getFactories('').subscribe(
      (factories) => {
        this.factories = factories.results;
        this.next = factories.next;
      }
    );
  }

  addNextFactories(): void {
    this.loading = true;

    this.Factories.getFactories(this.next).subscribe(
      (factories) => {
        const factoriesTemp: Array<IFactory> = factories.results;
        this.factories = this.factories.concat(factoriesTemp); // Question : Why push cause a pb of type
        this.next = factories.next;
      }, error => {
        console.error(error);
      }, () => {
        this.loading = false;
      });
  }

  ngAfterViewChecked() {
    this.viewportScroller.scrollToPosition([0, document.body.scrollHeight]);
  }
}
