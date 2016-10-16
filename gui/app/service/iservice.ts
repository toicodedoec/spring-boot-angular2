import { Http, Headers, RequestOptions, Response } from '@angular/http';

interface IService {
    http: Http;
    getAll();
    getById(id);
    update(id);
    handleError(error: any): Promise<any>;
}

export abstract class AbstractService<T> implements IService {
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    abstract getAll();

    abstract getById(id);

    abstract update(T);

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}