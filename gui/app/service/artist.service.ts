import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';

import { Album } from '../model/album';
import { AbstractService } from './iservice';
import constants = require('../constants');

@Injectable()
export class ArtistService extends AbstractService<Album> {
    constructor(http: Http) {
        super(http);
    }

    getAll(): Observable<Album[]> {
        return this.http.get(constants.ARTISTS_API_ENDPOINT)
            .map((r) => r.json() as Album[])
            .catch(this.handleError);
    }

    getById() {
        console.log("Not yet implemented");
    }

    update() {
        console.log("Not yet implemented");
    }
}