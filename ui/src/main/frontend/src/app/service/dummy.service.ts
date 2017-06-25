import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';

import { AbstractService } from './iservice';
import * as constants from '../constants';

@Injectable()
export class DummyService extends AbstractService<undefined> {

  constructor(http: Http) {
    super(http);
  }

  getAll(): Observable<undefined> {
    return undefined
  }

  getById(id: string): Observable<undefined> {
    return undefined
  }

  update(album: undefined) {
  }

  callToExternalService(): Observable<Object[]> {
    return this.http.get(constants.DUMMY_API_ENDPOINT)
      .map((r: Response) => r.json() as Object[])
      .catch(this.handleError);
  }
}
