import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';

import { Album } from './album';
import { AbstractService } from './iservice';
import constants = require('./constants');

@Injectable()
export class AlbumService extends AbstractService<Album> {

  constructor(http: Http) {
    super(http);
  }

  getAll(): Observable<Album[]> {
    return this.http.get(constants.ALBUMS_API_ENDPOINT)
      .map((r: Response) => r.json() as Album[])
      .catch(this.handleError);
  }

  getById(id: string): Observable<Album> {
    return this.http.get(constants.ALBUMS_API_ENDPOINT + id)
      .map((r: Response) => r.json() as Album)
      .catch(this.handleError);
  }

  update(album: Album) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(
      constants.ALBUMS_API_ENDPOINT + album['id'],
      JSON.stringify(album),
      { headers: headers }
    ).catch(this.handleError);
  }

  callToExternalService(): Observable<string> {
    return this.http.get("http://localhost:9000/")
      .map((r: Response) => r.json() as string)
      .catch(this.handleError);
  }
}
