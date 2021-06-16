import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config/config';
import {IFactories} from "../interfaces/factories";


@Injectable({
  providedIn: 'root'
})
export class FactoriesService {

  constructor(private http: HttpClient) {

  }

  getFactories(page: string) {
    return this.http.get<IFactories>(Config.SERVER_URL + page);
  }
}
