import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IFactory} from '../interfaces/factory';
import {IFactories} from "../interfaces/factories";
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit {

  public factories: Array<IFactory>;
  public next: string;
  public loading: boolean;
  private factoriesEndPoint : string = "https://sg666zbdmf.execute-api.us-east-1.amazonaws.com/dev";

  constructor(private http: HttpClient, private viewportScroller: ViewportScroller) {
    this.factories = [];
    this.next = "";
    this.loading = false;
  }

  ngOnInit(): void {
    this.http.get<IFactories>(this.factoriesEndPoint).subscribe(
      ( factories ) => {
        this.factories = factories.results;
        this.next = factories.next;
      }
    );
  }

  addNextFactories(): void {
    this.loading = true;

    this.http.get<IFactories>(this.factoriesEndPoint + this.next).subscribe(
      ( factories ) => {
        const factoriesTemp: Array<IFactory> = factories.results;
        this.factories = this.factories.concat(factoriesTemp); // Question : Why push cause a pb of type
        this.next = factories.next;
        this.loading = false;
      }
    );
  }

  ngAfterViewChecked(){
    window.scrollTo(0, document.body.scrollHeight);
     this.viewportScroller.scrollToPosition([0, document.body.scrollHeight]);
  }
}
